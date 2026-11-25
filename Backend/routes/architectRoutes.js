import express from "express";
import upload from "../middlewares/uploadMiddleware.js";
import {
  createArchitect,
} from "../controllers/architectController.js";

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

export default router;