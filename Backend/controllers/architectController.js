import Architect from "../models/architectModel.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";
import cloudinary from "../config/cloudinary.js";
import { fileTypeFromBuffer } from "file-type";
import ArchitectUnique from "../models/unique/architectUnique.model.js";

const generateUniqueArchitectId = async () => {
  const year = new Date().getFullYear();

  const counter = await ArchitectUnique.findOneAndUpdate(
    { year: year },
    {
      $inc: { sequence: 1 },
    },
    {
      returnDocument: "after",
      upsert: true,
    }
  );

  return `${year}${counter.sequence}`;
};


export const createArchitect = async (req, res) => {
  const uploadedFiles = [];

  try {
    const {
      title,
      fullName,
      email,
      phone,
      coaNumber,
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
      coaNumber,
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

    // Required Files
    const certificateFile = req.files?.coaCertificate?.[0];
    const receiptFile = req.files?.paymentReceipt?.[0];

    if (!certificateFile || !receiptFile) {
      return res.status(400).json({
        success: false,
        message: "Certificate and payment receipt are required",
      });
    }

    // Actual File Type Validation
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "application/pdf",
    ];

    for (const file of [certificateFile, receiptFile]) {
      const detectedType = await fileTypeFromBuffer(file.buffer);

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

    // Prepare Registration
    const architect = new Architect({
      registrationId: `LAF-ARCH-${await generateUniqueArchitectId()}`, title,
      fullName,
      email,
      phone,
      coaNumber,
      firmName,
      officeAddress,
      category,
      proposerName,
      laaNumber,
      txnId,
      chequeNumber,
      paymentDate: paymentDate || null,
      bankName,
      amount: 5900,
      declaration: true,
    });

    // Upload Certificate
    const certificate = await uploadToCloudinary(
      certificateFile.buffer,
      "laf/architects/certificates"
    );

    uploadedFiles.push(certificate);

    // Upload Payment Receipt
    const receipt = await uploadToCloudinary(
      receiptFile.buffer,
      "laf/architects/payment-receipts"
    );

    uploadedFiles.push(receipt);

    architect.coaCertificate = {
      publicId: certificate.public_id,
      resourceType: certificate.resource_type,
      format: certificate.format,
    };

    architect.paymentReceipt = {
      publicId: receipt.public_id,
      resourceType: receipt.resource_type,
      format: receipt.format,
    };

    // Save Data in MongoDB
    await architect.save();

    return res.status(201).json({
      success: true,
      message: "Architect registration submitted successfully",
      data: {
        registrationId: architect.registrationId,
        status: architect.status,
        paymentStatus: architect.paymentStatus,
      },
    });

  } catch (error) {

    // Remove uploaded files if registration fails
    await Promise.allSettled(
      uploadedFiles.map((file) =>
        cloudinary.uploader.destroy(file.public_id, {
          resource_type: file.resource_type,
          type: "authenticated",
        })
      )
    );

    console.error("Architect Registration Error:", error.message);

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

// Get All Architects - Server Side
export const getAllArchitects = async (req, res) => {
  try {
    const {
      search = "",
      status = "all",
      category = "all",
    } = req.query;

    // Validate Filters
    const allowedStatuses = [
      "all",
      "pending",
      "approved",
      "rejected",
    ];

    const allowedCategories = [
      "all",
      "Life Member Architect",
      "Executive Member",
      "Associate Architect",
      "Student Architect",
    ];

    if (
      typeof search !== "string" ||
      search.length > 200 ||
      !allowedStatuses.includes(status) ||
      !allowedCategories.includes(category)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid search or filter parameters",
      });
    }

    // Pagination
    const requestedPage = Math.max(
      1,
      parseInt(req.query.page, 10) || 1
    );

    const limit = Math.min(
      100,
      Math.max(1, parseInt(req.query.limit, 10) || 10)
    );

    // MongoDB Query
    const query = {};

    // Server Side Search
    if (search.trim()) {
      const searchText = search
        .trim()
        .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

      query.$or = [
        { fullName: { $regex: searchText, $options: "i" } },
        { email: { $regex: searchText, $options: "i" } },
        { phone: { $regex: searchText, $options: "i" } },
        { coaNumber: { $regex: searchText, $options: "i" } },
        { registrationId: { $regex: searchText, $options: "i" } },
      ];
    }

    // Status Filter
    if (status !== "all") {
      query.status = status;
    }

    // Category Filter
    if (category !== "all") {
      query.category = category;
    }

    // Total Records and Statistics
    const [
      totalRecords,
      totalArchitects,
      pendingApplications,
      approvedApplications,
      rejectedApplications,
    ] = await Promise.all([
      Architect.countDocuments(query),
      Architect.countDocuments(),
      Architect.countDocuments({ status: "pending" }),
      Architect.countDocuments({ status: "approved" }),
      Architect.countDocuments({ status: "rejected" }),
    ]);

    const totalPages = Math.max(
      1,
      Math.ceil(totalRecords / limit)
    );

    const page = Math.min(requestedPage, totalPages);

    const skip = (page - 1) * limit;

    // Fetch Only Required Records
    const architects = await Architect.find(query)
      .select(
        "registrationId title fullName email phone coaNumber category status paymentStatus createdAt"
      )
      .sort({ createdAt: -1, _id: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    // Response
    return res.status(200).json({
      success: true,
      message: "Architects fetched successfully",

      total: totalRecords,

      stats: {
        totalArchitects,
        pendingApplications,
        approvedApplications,
        rejectedApplications,
      },

      pagination: {
        currentPage: page,
        limit,
        totalRecords,
        totalPages,
      },

      data: architects,
    });

  } catch (error) {
    console.log("Get Architects Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch architects",
    });
  }
};

// Get Single Architect
export const getSingleArchitect = async (req, res) => {
  try {

    const { id } = req.params;

    const architect = await Architect.findById(id);

    if (!architect) {
      return res.status(404).json({
        success: false,
        message: "Architect not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Architect details fetched successfully",
      data: architect,
    });

  } catch (error) {

    console.log("Get Architect Error:", error.message);

    res.status(error.name === "CastError" ? 400 : 500).json({
      success: false,
      message:
        error.name === "CastError"
          ? "Invalid architect ID"
          : "Failed to fetch architect details",
    });

  }
};

// View Architect Document
export const viewArchitectDocument = async (req, res) => {
  try {
    const { id, documentType } = req.params;

    const architect = await Architect.findById(id);

    if (!architect) {
      return res.status(404).json({
        success: false,
        message: "Architect not found",
      });
    }

    let document;

    if (documentType === "certificate") {
      document = architect.coaCertificate;
    } else if (documentType === "receipt") {
      document = architect.paymentReceipt;
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
    console.log("Document Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to open document",
    });
  }
};

// Update Architect Payment Status
export const updatePaymentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { paymentStatus } = req.body;

    if (!["verified", "rejected"].includes(paymentStatus)) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment status",
      });
    }

    const architect = await Architect.findById(id);

    if (!architect) {
      return res.status(404).json({
        success: false,
        message: "Architect not found",
      });
    }

    architect.paymentStatus = paymentStatus;

    // If payment is rejected, application cannot remain approved
    if (
      paymentStatus === "rejected" &&
      architect.status === "approved"
    ) {
      architect.status = "pending";
    }

    await architect.save();

    res.status(200).json({
      success: true,
      message: "Payment status updated successfully",
      data: architect,
    });

  } catch (error) {
    console.log("Payment Status Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to update payment status",
    });
  }
};

// Update Architect Application Status
export const updateApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, adminRemarks } = req.body;

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid application status",
      });
    }

    const architect = await Architect.findById(id);

    if (!architect) {
      return res.status(404).json({
        success: false,
        message: "Architect not found",
      });
    }

    // Payment must be verified before approval
    if (
      status === "approved" &&
      architect.paymentStatus !== "verified"
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

    architect.status = status;

    if (adminRemarks !== undefined) {
      architect.adminRemarks = adminRemarks.trim();
    }

    await architect.save();

    res.status(200).json({
      success: true,
      message: "Application status updated successfully",
      data: architect,
    });

  } catch (error) {
    console.log("Application Status Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to update application status",
    });
  }
};