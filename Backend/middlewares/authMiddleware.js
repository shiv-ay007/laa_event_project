import jwt from "jsonwebtoken";
import Admin from "../models/adminModel.js";

export const protectAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (
      !authHeader ||
      !authHeader.startsWith("Bearer ")
    ) {
      return res.status(401).json({
        success: false,
        message: "Access denied. Token required",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET,
      {
        algorithms: ["HS256"],
      }
    );

    const admin = await Admin.findById(decoded.id)
      .select("name email role isActive lastLogin");

    if (!admin || !admin.isActive) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized admin",
      });
    }

    if (!["admin", "superadmin"].includes(admin.role)) {
      return res.status(403).json({
        success: false,
        message: "Access forbidden",
      });
    }

    req.admin = admin;

    next();

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};