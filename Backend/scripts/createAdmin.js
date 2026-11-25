import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

import connectDB from "../config/db.js";
import Admin from "../models/adminModel.js";

dotenv.config();

const createAdmin = async () => {
  try {
    const {
      ADMIN_NAME,
      ADMIN_EMAIL,
      ADMIN_PASSWORD,
    } = process.env;

    if (!ADMIN_NAME || !ADMIN_EMAIL || !ADMIN_PASSWORD) {
      throw new Error("Admin credentials are missing");
    }

    if (
      ADMIN_PASSWORD.length < 12 ||
      Buffer.byteLength(ADMIN_PASSWORD, "utf8") > 72
    ) {
      throw new Error("Invalid admin password length");
    }

    await connectDB();

    const email = ADMIN_EMAIL.trim().toLowerCase();

    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      console.log("Admin already exists");
      return;
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(
      ADMIN_PASSWORD,
      12
    );

    // Create Admin
    await Admin.create({
      name: ADMIN_NAME,
      email,
      password: hashedPassword,
      role: "superadmin",
      isActive: true,
    });

    console.log("Admin Created Successfully");
    console.log("Admin Email:", email);

  } catch (error) {
    console.error("Error:", error.message);
    process.exitCode = 1;

  } finally {
    await mongoose.disconnect();
  }
};

createAdmin();