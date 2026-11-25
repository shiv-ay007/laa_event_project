import express from "express";

import {
  getDashboardStats,
  getRecentRegistrations,
} from "../controllers/dashboardController.js";

import { protectAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Dashboard Statistics
router.get("/stats", protectAdmin, getDashboardStats);

// Recent Registrations
router.get("/recent", protectAdmin, getRecentRegistrations);

export default router;