import Engineer from "../models/engineerModel.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";
import cloudinary from "../config/cloudinary.js";
import { randomUUID } from "node:crypto";
import { fileTypeFromBuffer } from "file-type";
import EngineerUnique from "../models/unique/engineerUnique.model.js";

const generateUniqueEngineerId = async () => {
  const year = new Date().getFullYear();

  const counter = await EngineerUnique.findOneAndUpdate(
    { year: year },
    {
      $inc: { sequence: 1 },
    },
    {
      new: true,
      upsert: true,
    }
  );

  return `${year}${counter.sequence}`;
};

export const createEngineer = async (req, res) => {
  const uploadedFiles = [];

  try {
    const {
      title,
      fullName,
      email,
      phone,
      regNumber,
      firmName,
      officeAddress,
      category,
      proposerName,
      laaNumber,
      txnId,
      chequeNumber,
      paymentDate,
      bankName,
      declaration,
    } = req.body;

    // Required Fields Validation
    const requiredFields = {
      title,
      fullName,
      email,
      phone,
      regNumber,
      officeAddress,
      category,
      proposerName,
      laaNumber,
    };

    for (const [key, value] of Object.entries(requiredFields)) {
      if (typeof value !== "string" || !value.trim()) {
        return res.status(400).json({
          success: false,
          message: `${key} is required`,
        });
      }
    }

    // Category Validation
    const validCategories = [
      "LAA Member",
      "Other than LAA",
    ];

    if (!validCategories.includes(category)) {
      return res.status(400).json({
        success: false,
        message: "Invalid membership category",
      });
    }

    // Email Validation
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }

    // Declaration Validation
    if (declaration !== "true" && declaration !== true) {
      return res.status(400).json({
        success: false,
        message: "Please accept the declaration",
      });
    }

    // Calculate Fee on Backend
    const isPaid = category === "Other than LAA";
    const amount = isPaid ? 2000 : 0;

    // Uploaded Files
    const certificateFile =
      req.files?.engineeringCertificate?.[0];

    const receiptFile =
      req.files?.paymentReceipt?.[0];

    if (!certificateFile) {
      return res.status(400).json({
        success: false,
        message: "Engineering certificate is required",
      });
    }

    // Payment Validation for Paid Members
    if (isPaid) {
      const paymentFields = {
        txnId,
        paymentDate,
        bankName,
      };

      for (const [key, value] of Object.entries(paymentFields)) {
        if (typeof value !== "string" || !value.trim()) {
          return res.status(400).json({
            success: false,
            message: `${key} is required`,
          });
        }
      }

      if (Number.isNaN(Date.parse(paymentDate))) {
        return res.status(400).json({
          success: false,
          message: "Invalid payment date",
        });
      }

      if (!receiptFile) {
        return res.status(400).json({
          success: false,
          message: "Payment receipt is required",
        });
      }
    }

    // File Content Validation
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "application/pdf",
    ];

    const filesToValidate = [certificateFile];

    if (isPaid) {
      filesToValidate.push(receiptFile);
    }

    for (const file of filesToValidate) {
      const detectedType = await fileTypeFromBuffer(
        file.buffer
      );

      if (
        !detectedType ||
        !allowedTypes.includes(detectedType.mime)
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid file content",
        });
      }
    }

    // Upload Engineering Certificate
    const certificate = await uploadToCloudinary(
      certificateFile.buffer,
      "laf/engineers/certificates"
    );

    uploadedFiles.push(certificate);

    // Upload Payment Receipt Only for Paid Members
    let paymentReceipt = null;

    if (isPaid) {
      const receipt = await uploadToCloudinary(
        receiptFile.buffer,
        "laf/engineers/payment-receipts"
      );

      uploadedFiles.push(receipt);

      paymentReceipt = {
        publicId: receipt.public_id,
        resourceType: receipt.resource_type,
        format: receipt.format,
      };
    }

    // Create Registration
    const engineer = new Engineer({
    registrationId: `LAF-ENG-${await generateUniqueEngineerId()}`,
      title,
      fullName,
      email,
      phone,
      regNumber,
      firmName,
      officeAddress,
      category,
      proposerName,
      laaNumber,

      engineeringCertificate: {
        publicId: certificate.public_id,
        resourceType: certificate.resource_type,
        format: certificate.format,
      },

      txnId: isPaid ? txnId : "",
      chequeNumber: isPaid ? chequeNumber : "",
      paymentDate: isPaid ? paymentDate : null,
      bankName: isPaid ? bankName : "",

      amount,
      paymentReceipt,
      declaration: true,

      paymentStatus: isPaid
        ? "pending"
        : "not_required",

      status: "pending",
    });

    // Save to MongoDB
    await engineer.save();

    return res.status(201).json({
      success: true,
      message: "Engineer registration submitted successfully",
      data: {
        registrationId: engineer.registrationId,
        category: engineer.category,
        amount: engineer.amount,
        status: engineer.status,
        paymentStatus: engineer.paymentStatus,
      },
    });

  } catch (error) {

    // Cleanup Cloudinary Files on Failure
    await Promise.allSettled(
      uploadedFiles.map((file) =>
        cloudinary.uploader.destroy(file.public_id, {
          resource_type: file.resource_type,
          type: "authenticated",
        })
      )
    );

    console.error(
      "Engineer Registration Error:",
      error.message
    );

    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: "Invalid registration details",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Unable to submit registration",
    });
  }
};

// Get All Engineers

export const getAllEngineers = async (req, res) => {
  try {
    const engineers = await Engineer.find()
      .select(
        "registrationId title fullName email phone regNumber category amount status paymentStatus createdAt"
      )
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Engineers fetched successfully",
      total: engineers.length,
      data: engineers,
    });

  } catch (error) {
    console.log("Get Engineers Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch engineers",
    });
  }
};

// Get Single Engineer

export const getSingleEngineer = async (req, res) => {
  try {
    const { id } = req.params;

    const engineer = await Engineer.findById(id);

    if (!engineer) {
      return res.status(404).json({
        success: false,
        message: "Engineer not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Engineer details fetched successfully",
      data: engineer,
    });

  } catch (error) {
    console.log("Engineer Details Error:", error.message);

    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid engineer ID",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to fetch engineer details",
    });
  }
};

// View Engineer Documents

export const viewEngineerDocument = async (req, res) => {
  try {
    const { id, documentType } = req.params;

    const engineer = await Engineer.findById(id);

    if (!engineer) {
      return res.status(404).json({
        success: false,
        message: "Engineer not found",
      });
    }

    let document;

    if (documentType === "certificate") {
      document = engineer.engineeringCertificate;
    } else if (documentType === "receipt") {
      document = engineer.paymentReceipt;
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid document type",
      });
    }

    if (!document?.publicId) {
      return res.status(404).json({
        success: false,
        message: "Document not found",
      });
    }

    const url = cloudinary.utils.private_download_url(
      document.publicId,
      document.resourceType === "raw"
        ? ""
        : document.format,
      {
        resource_type: document.resourceType,
        type: "authenticated",
        expires_at: Math.floor(Date.now() / 1000) + 300,
        attachment: false,
      }
    );

    res.status(200).json({
      success: true,
      url,
    });

  } catch (error) {
    console.log("Engineer Document Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to open document",
    });
  }
};

// Update Engineer Payment Status

export const updateEngineerPaymentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { paymentStatus } = req.body;

    if (!["verified", "rejected"].includes(paymentStatus)) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment status",
      });
    }

    const engineer = await Engineer.findById(id);

    if (!engineer) {
      return res.status(404).json({
        success: false,
        message: "Engineer not found",
      });
    }

    // Free Engineer Payment Check

    if (engineer.category === "LAA Member") {
      return res.status(400).json({
        success: false,
        message: "Payment is not required for LAA members",
      });
    }

    engineer.paymentStatus = paymentStatus;

    if (
      paymentStatus === "rejected" &&
      engineer.status === "approved"
    ) {
      engineer.status = "pending";
    }

    await engineer.save();

    res.status(200).json({
      success: true,
      message: "Payment status updated successfully",
      data: engineer,
    });

  } catch (error) {
    console.log("Payment Status Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to update payment status",
    });
  }
};

// Update Engineer Application Status

export const updateEngineerApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, adminRemarks } = req.body;

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid application status",
      });
    }

    const engineer = await Engineer.findById(id);

    if (!engineer) {
      return res.status(404).json({
        success: false,
        message: "Engineer not found",
      });
    }

    // Paid Engineer Payment Verification

    if (
      status === "approved" &&
      engineer.category === "Other than LAA" &&
      engineer.paymentStatus !== "verified"
    ) {
      return res.status(400).json({
        success: false,
        message: "Please verify payment before approving application",
      });
    }

    if (
      adminRemarks !== undefined &&
      typeof adminRemarks !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid admin remarks",
      });
    }

    engineer.status = status;

    if (adminRemarks !== undefined) {
      engineer.adminRemarks = adminRemarks.trim();
    }

    await engineer.save();

    res.status(200).json({
      success: true,
      message: "Application status updated successfully",
      data: engineer,
    });

  } catch (error) {
    console.log("Application Status Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to update application status",
    });
  }
};