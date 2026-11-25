import express from "express";
import upload from "../middlewares/uploadMiddleware.js";
import {
  createExhibitor,
} from "../controllers/exhibitorController.js";

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

export default router;