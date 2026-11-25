import Architect from "../models/architectModel.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";
import cloudinary from "../config/cloudinary.js";
import { randomUUID } from "node:crypto";
import { fileTypeFromBuffer } from "file-type";

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
      registrationId: `LAF-ARCH-${randomUUID()}`,
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