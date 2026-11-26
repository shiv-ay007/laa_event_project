import express from "express";
import upload from "../middlewares/uploadMiddleware.js";
import {
  createArchitect,
  getAllArchitects,
  getSingleArchitect,
  viewArchitectDocument,
  updatePaymentStatus,
  updateApplicationStatus,
} from "../controllers/architectController.js";
import { protectAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Architect Registration
router.post(
  "/",
  upload.fields([
    {
      name: "coaCertificate",
      maxCount: 1,
    },
    {
      name: "paymentReceipt",
      maxCount: 1,
    },
  ]),
  createArchitect
);

// Get All Architects
router.get("/", protectAdmin, getAllArchitects);

// Get Single Architect
router.get("/:id", protectAdmin, getSingleArchitect);

// View Uploaded Document
router.get(
  "/:id/document/:documentType",
  protectAdmin,
  viewArchitectDocument
);

// Update Payment Status
router.patch(
  "/:id/payment-status",
  protectAdmin,
  updatePaymentStatus
);

// Update Application Status
router.patch(
  "/:id/application-status",
  protectAdmin,
  updateApplicationStatus
);

export default router;