import express from "express";
import {
  submitContact,
  getAllContacts,
} from "../controllers/contactController.js";
import { protectAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Public: Submit Contact Enquiry
router.post("/", submitContact);

// Protected Admin: Get All Contact Enquiries
router.get("/", protectAdmin, getAllContacts);

export default router;
