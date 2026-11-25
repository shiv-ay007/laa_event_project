import Engineer from "../models/engineerModel.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";
import cloudinary from "../config/cloudinary.js";
import { randomUUID } from "node:crypto";
import { fileTypeFromBuffer } from "file-type";

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
      registrationId: `LAF-ENG-${randomUUID()}`,

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