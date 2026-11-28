import Exhibitor from "../models/exhibitorModel.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";
import cloudinary from "../config/cloudinary.js";
import { randomUUID } from "node:crypto";
import { fileTypeFromBuffer } from "file-type";
import ExhibitorUnique from "../models/unique/exhibitorUnique.model.js";

const generateUniqueExhibitorId = async () => {
  const year = new Date().getFullYear();

  const counter = await ExhibitorUnique.findOneAndUpdate(
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


export const createExhibitor = async (req, res) => {
  const uploadedFiles = [];

  try {
    const {
      companyName,
      contactPerson,
      designation,
      email,
      phone,
      website,
      industrySector,
      spaceRequired,
      specialRequirements,
      txnId,
      paymentDate,
      declaration,
    } = req.body;

    // Required Fields Validation
    const requiredFields = {
      companyName,
      contactPerson,
      designation,
      email,
      phone,
      industrySector,
      spaceRequired,
      txnId,
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

    // Industry Sector Validation
    const validSectors = [
      "Luxury Interiors & Decor",
      "Architectural Lighting & Automation",
      "Structural & Facade Materials",
      "Tiles, Bathware & Stone",
      "Furniture & Outdoor Solutions",
      "Green Building Tech & HVAC",
      "Other Premium Products",
    ];

    if (!validSectors.includes(industrySector)) {
      return res.status(400).json({
        success: false,
        message: "Invalid industry sector",
      });
    }

    // Stall Space Validation
    const validSpaces = [
      "Executive Stall (9 sqm)",
      "Gold Stall (18 sqm)",
      "Platinum Pavilion (36 sqm)",
      "Custom Open Space / Sponsor Deck",
    ];

    if (!validSpaces.includes(spaceRequired)) {
      return res.status(400).json({
        success: false,
        message: "Invalid stall space",
      });
    }

    // Payment Date Validation
    if (
      paymentDate &&
      Number.isNaN(Date.parse(paymentDate))
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment date",
      });
    }

    // Declaration Validation
    if (declaration !== "true" && declaration !== true) {
      return res.status(400).json({
        success: false,
        message: "Please accept the declaration",
      });
    }

    // Uploaded Files
    const logoFile = req.files?.brandLogo?.[0];
    const receiptFile = req.files?.paymentReceipt?.[0];

    if (!receiptFile) {
      return res.status(400).json({
        success: false,
        message: "Payment receipt is required",
      });
    }

    // Allowed File Types
    const imageTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    const receiptTypes = [
      ...imageTypes,
      "application/pdf",
    ];

    // Validate Logo
    if (logoFile) {
      const logoType = await fileTypeFromBuffer(
        logoFile.buffer
      );

      if (
        !logoType ||
        !imageTypes.includes(logoType.mime)
      ) {
        return res.status(400).json({
          success: false,
          message: "Invalid brand logo file",
        });
      }
    }

    // Validate Payment Receipt
    const receiptType = await fileTypeFromBuffer(
      receiptFile.buffer
    );

    if (
      !receiptType ||
      !receiptTypes.includes(receiptType.mime)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment receipt file",
      });
    }

    // Upload Brand Logo
    let brandLogo = null;

    if (logoFile) {
      const logo = await uploadToCloudinary(
        logoFile.buffer,
        "laf/exhibitors/brand-logos"
      );

      uploadedFiles.push(logo);

      brandLogo = {
        publicId: logo.public_id,
        resourceType: logo.resource_type,
        format: logo.format,
      };
    }

    // Upload Payment Receipt
    const receipt = await uploadToCloudinary(
      receiptFile.buffer,
      "laf/exhibitors/payment-receipts"
    );

    uploadedFiles.push(receipt);

    // Create Exhibitor Registration
    const exhibitor = new Exhibitor({
    registrationId: `LAF-EXH-${await generateUniqueExhibitorId()}`,
      companyName,
      contactPerson,
      designation,
      email,
      phone,
      website,
      industrySector,
      spaceRequired,
      specialRequirements,

      brandLogo,

      txnId,
      paymentDate: paymentDate || null,

      // Amount will be decided after fee confirmation
      amount: null,

      paymentReceipt: {
        publicId: receipt.public_id,
        resourceType: receipt.resource_type,
        format: receipt.format,
      },

      declaration: true,
      paymentStatus: "pending",
      status: "pending",
    });

    // Save Data in MongoDB
    await exhibitor.save();

    return res.status(201).json({
      success: true,
      message: "Exhibitor registration submitted successfully",
      data: {
        registrationId: exhibitor.registrationId,
        companyName: exhibitor.companyName,
        spaceRequired: exhibitor.spaceRequired,
        amount: exhibitor.amount,
        status: exhibitor.status,
        paymentStatus: exhibitor.paymentStatus,
      },
    });

  } catch (error) {

    // Cleanup Uploaded Files if Registration Fails
    await Promise.allSettled(
      uploadedFiles.map((file) =>
        cloudinary.uploader.destroy(file.public_id, {
          resource_type: file.resource_type,
          type: "authenticated",
        })
      )
    );

    console.error(
      "Exhibitor Registration Error:",
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

// Get All Exhibitors - Server Side
export const getAllExhibitors = async (req, res) => {
  try {
    const {
      search = "",
      status = "all",
      stall = "all",
      spaceRequired = "all",
      sector = "all",
      industrySector = "all",
    } = req.query;

    const selectedStall = stall !== "all" ? stall : spaceRequired;
    const selectedSector = sector !== "all" ? sector : industrySector;

    // Validate Filters
    const allowedStatuses = [
      "all",
      "pending",
      "approved",
      "rejected",
    ];

    const allowedSectors = [
      "all",
      "Luxury Interiors & Decor",
      "Architectural Lighting & Automation",
      "Structural & Facade Materials",
      "Tiles, Bathware & Stone",
      "Furniture & Outdoor Solutions",
      "Green Building Tech & HVAC",
      "Other Premium Products",
    ];

    const allowedStalls = [
      "all",
      "Executive Stall (9 sqm)",
      "Gold Stall (18 sqm)",
      "Platinum Pavilion (36 sqm)",
      "Custom Open Space / Sponsor Deck",
    ];

    if (
      typeof search !== "string" ||
      search.length > 200 ||
      !allowedStatuses.includes(status) ||
      !allowedSectors.includes(selectedSector) ||
      !allowedStalls.includes(selectedStall)
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
        { companyName: { $regex: searchText, $options: "i" } },
        { contactPerson: { $regex: searchText, $options: "i" } },
        { email: { $regex: searchText, $options: "i" } },
        { phone: { $regex: searchText, $options: "i" } },
        { registrationId: { $regex: searchText, $options: "i" } },
      ];
    }

    // Status Filter
    if (status !== "all") {
      query.status = status;
    }

    // Space Required Filter
    if (selectedStall !== "all") {
      query.spaceRequired = selectedStall;
    }

    // Industry Sector Filter
    if (selectedSector !== "all") {
      query.industrySector = selectedSector;
    }

    // Total Records and Statistics
    const [
      totalRecords,
      totalExhibitors,
      pendingApplications,
      approvedApplications,
      rejectedApplications,
      verifiedPayments,
      pendingPayments,
    ] = await Promise.all([
      Exhibitor.countDocuments(query),
      Exhibitor.countDocuments(),
      Exhibitor.countDocuments({ status: "pending" }),
      Exhibitor.countDocuments({ status: "approved" }),
      Exhibitor.countDocuments({ status: "rejected" }),
      Exhibitor.countDocuments({ paymentStatus: "verified" }),
      Exhibitor.countDocuments({ paymentStatus: "pending" }),
    ]);

    const totalPages = Math.max(
      1,
      Math.ceil(totalRecords / limit)
    );

    const page = Math.min(requestedPage, totalPages);

    const skip = (page - 1) * limit;

    // Fetch Only Required Records
    const exhibitors = await Exhibitor.find(query)
      .select(
        "registrationId companyName contactPerson email phone industrySector spaceRequired amount paymentStatus status createdAt"
      )
      .sort({ createdAt: -1, _id: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    // Response
    return res.status(200).json({
      success: true,
      message: "Exhibitors fetched successfully",

      total: totalRecords,

      stats: {
        totalExhibitors,
        pendingApplications,
        approvedApplications,
        rejectedApplications,
        verifiedPayments,
        pendingPayments,
      },

      pagination: {
        currentPage: page,
        limit,
        totalRecords,
        totalPages,
      },

      data: exhibitors,
    });

  } catch (error) {
    console.log("Get Exhibitors Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch exhibitors",
    });
  }
};

// Get Single Exhibitor

export const getSingleExhibitor = async (req, res) => {
  try {
    const { id } = req.params;

    const exhibitor = await Exhibitor.findById(id);

    if (!exhibitor) {
      return res.status(404).json({
        success: false,
        message: "Exhibitor not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Exhibitor details fetched successfully",
      data: exhibitor,
    });

  } catch (error) {
    console.log("Exhibitor Details Error:", error.message);

    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid exhibitor ID",
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to fetch exhibitor details",
    });
  }
};

// View Exhibitor Documents

export const viewExhibitorDocument = async (req, res) => {
  try {
    const { id, documentType } = req.params;

    const exhibitor = await Exhibitor.findById(id);

    if (!exhibitor) {
      return res.status(404).json({
        success: false,
        message: "Exhibitor not found",
      });
    }

    let document;

    if (documentType === "logo") {
      document = exhibitor.brandLogo;

    } else if (documentType === "receipt") {
      document = exhibitor.paymentReceipt;

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
    console.log("Exhibitor Document Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to open document",
    });
  }
};

// Update Exhibitor Payment Status

export const updateExhibitorPaymentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { paymentStatus } = req.body;

    if (!["verified", "rejected"].includes(paymentStatus)) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment status",
      });
    }

    const exhibitor = await Exhibitor.findById(id);

    if (!exhibitor) {
      return res.status(404).json({
        success: false,
        message: "Exhibitor not found",
      });
    }

    exhibitor.paymentStatus = paymentStatus;

    if (
      paymentStatus === "rejected" &&
      exhibitor.status === "approved"
    ) {
      exhibitor.status = "pending";
    }

    await exhibitor.save();

    res.status(200).json({
      success: true,
      message: "Payment status updated successfully",
      data: exhibitor,
    });

  } catch (error) {
    console.log("Payment Status Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to update payment status",
    });
  }
};

// Update Exhibitor Application Status

export const updateExhibitorApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, adminRemarks } = req.body;

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid application status",
      });
    }

    const exhibitor = await Exhibitor.findById(id);

    if (!exhibitor) {
      return res.status(404).json({
        success: false,
        message: "Exhibitor not found",
      });
    }

    if (
      status === "approved" &&
      exhibitor.paymentStatus !== "verified"
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

    exhibitor.status = status;

    if (adminRemarks !== undefined) {
      exhibitor.adminRemarks = adminRemarks.trim();
    }

    await exhibitor.save();

    res.status(200).json({
      success: true,
      message: "Application status updated successfully",
      data: exhibitor,
    });

  } catch (error) {
    console.log("Application Status Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to update application status",
    });
  }
};