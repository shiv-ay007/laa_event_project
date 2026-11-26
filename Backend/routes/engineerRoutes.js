import express from "express";

import {
  createEngineer,
  getAllEngineers,
  getSingleEngineer,
  viewEngineerDocument,
  updateEngineerPaymentStatus,
  updateEngineerApplicationStatus,
} from "../controllers/engineerController.js";

import upload from "../middlewares/uploadMiddleware.js";

import {
  protectAdmin
} from "../middlewares/authMiddleware.js";

const router = express.Router();


// Engineer Registration

router.post(
  "/",
  upload.fields([
    {
      name: "engineeringCertificate",
      maxCount: 1,
    },
    {
      name: "paymentReceipt",
      maxCount: 1,
    },
  ]),
  createEngineer
);


// Get All Engineers

router.get(
  "/",
  protectAdmin,
  getAllEngineers
);


// Get Single Engineer

router.get(
  "/:id",
  protectAdmin,
  getSingleEngineer
);


// View Documents

router.get(
  "/:id/document/:documentType",
  protectAdmin,
  viewEngineerDocument
);


// Update Payment Status

router.patch(
  "/:id/payment-status",
  protectAdmin,
  updateEngineerPaymentStatus
);


// Update Application Status

router.patch(
  "/:id/application-status",
  protectAdmin,
  updateEngineerApplicationStatus
);


export default router;