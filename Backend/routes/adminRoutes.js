import express from "express";

import {
  loginAdmin,
  getAdminProfile,
} from "../controllers/adminController.js";

import {
  protectAdmin,
} from "../middlewares/authMiddleware.js";

const router = express.Router();

// Public Login Route
router.post("/login", loginAdmin);

// Protected Profile Route
router.get("/profile", protectAdmin, getAdminProfile);

export default router;