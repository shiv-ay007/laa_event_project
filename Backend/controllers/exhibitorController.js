import Exhibitor from "../models/exhibitorModel.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";
import cloudinary from "../config/cloudinary.js";
import { randomUUID } from "node:crypto";
import { fileTypeFromBuffer } from "file-type";

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
      registrationId: `LAF-EXH-${randomUUID()}`,

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