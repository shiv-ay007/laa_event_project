import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    publicId: {
      type: String,
      required: true,
    },
    resourceType: {
      type: String,
      required: true,
    },
    format: String,
  },
  { _id: false }
);

const architectSchema = new mongoose.Schema(
  {
    registrationId: {
      type: String,
      required: true,
      unique: true,
    },

    // Personal Details
    title: {
      type: String,
      required: true,
      trim: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      match: /^\S+@\S+\.\S+$/,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    // Professional Details
    coaNumber: {
      type: String,
      required: true,
      trim: true,
    },

    firmName: {
      type: String,
      trim: true,
      default: "",
    },

    officeAddress: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    proposerName: {
      type: String,
      required: true,
      trim: true,
    },

    laaNumber: {
      type: String,
      required: true,
      trim: true,
    },

    // Certificate
    coaCertificate: {
      type: documentSchema,
      required: true,
    },

    // Payment Details
    txnId: {
      type: String,
      trim: true,
      default: "",
    },

    chequeNumber: {
      type: String,
      trim: true,
      default: "",
    },

    paymentDate: {
      type: Date,
      default: null,
    },

    bankName: {
      type: String,
      trim: true,
      default: "",
    },

    amount: {
      type: Number,
      default: 5900,
    },

    paymentReceipt: {
      type: documentSchema,
      required: true,
    },

    declaration: {
      type: Boolean,
      required: true,
      validate: {
        validator: (value) => value === true,
        message: "Declaration must be accepted",
      },
    },

    // Admin Management
    paymentStatus: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },

    adminRemarks: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Architect = mongoose.model(
  "Architect",
  architectSchema
);

export default Architect;


