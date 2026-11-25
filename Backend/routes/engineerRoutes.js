import express from "express";
import upload from "../middlewares/uploadMiddleware.js";
import {
  createEngineer,
} from "../controllers/engineerController.js";

const router = express.Router();

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

export default router;