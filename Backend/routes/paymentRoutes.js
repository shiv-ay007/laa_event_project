import express from "express";

import {
  getAllPayments,
} from "../controllers/paymentController.js";

import { protectAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Get All Payments
router.get("/", protectAdmin, getAllPayments);

export default router;