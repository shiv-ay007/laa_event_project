import express from "express";

import {
  createExhibitor,
  getAllExhibitors,
  getSingleExhibitor,
  viewExhibitorDocument,
  updateExhibitorPaymentStatus,
  updateExhibitorApplicationStatus,
} from "../controllers/exhibitorController.js";

import upload from "../middlewares/uploadMiddleware.js";

import {
  protectAdmin
} from "../middlewares/authMiddleware.js";

const router = express.Router();


// Exhibitor Registration

router.post(
  "/",
  upload.fields([
    {
      name: "brandLogo",
      maxCount: 1,
    },
    {
      name: "paymentReceipt",
      maxCount: 1,
    },
  ]),
  createExhibitor
);


// Get All Exhibitors

router.get(
  "/",
  protectAdmin,
  getAllExhibitors
);


// Get Single Exhibitor

router.get(
  "/:id",
  protectAdmin,
  getSingleExhibitor
);


// View Documents

router.get(
  "/:id/document/:documentType",
  protectAdmin,
  viewExhibitorDocument
);


// Update Payment Status

router.patch(
  "/:id/payment-status",
  protectAdmin,
  updateExhibitorPaymentStatus
);


// Update Application Status

router.patch(
  "/:id/application-status",
  protectAdmin,
  updateExhibitorApplicationStatus
);


export default router;