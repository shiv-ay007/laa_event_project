import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";

import connectDB from "./config/db.js";
import architectRoutes from "./routes/architectRoutes.js";
import engineerRoutes from "./routes/engineerRoutes.js";
import exhibitorRoutes from "./routes/exhibitorRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Testing Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "LAF 3.0 Backend Running Successfully",
  });
});

// Registration Routes
app.use("/api/architects", architectRoutes);
app.use("/api/engineers", engineerRoutes);
app.use("/api/exhibitors", exhibitorRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/contacts", contactRoutes);

// Admin Routes
app.use("/api/admin", adminRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }

  if (err.message?.startsWith("Only JPG")) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }

  console.error(err.message);

  res.status(500).json({
    success: false,
    message: "Something went wrong",
  });
});

// Port
const PORT = process.env.PORT || 5000;

// Start Server
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();