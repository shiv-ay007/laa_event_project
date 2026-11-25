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

const engineerSchema = new mongoose.Schema(
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
    regNumber: {
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
      enum: ["LAA Member", "Other than LAA"],
      required: true,
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

    // Engineering Certificate
    engineeringCertificate: {
      type: documentSchema,
      required: true,
    },

    // Payment Details
    txnId: {
      type: String,
      trim: true,
      default: "",
      required: function () {
        return this.category === "Other than LAA";
      },
    },

    chequeNumber: {
      type: String,
      trim: true,
      default: "",
    },

    paymentDate: {
      type: Date,
      default: null,
      required: function () {
        return this.category === "Other than LAA";
      },
    },

    bankName: {
      type: String,
      trim: true,
      default: "",
      required: function () {
        return this.category === "Other than LAA";
      },
    },

    amount: {
      type: Number,
      required: true,
      enum: [0, 2000],
    },

    paymentReceipt: {
      type: documentSchema,
      default: null,
      required: function () {
        return this.category === "Other than LAA";
      },
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
      enum: [
        "not_required",
        "pending",
        "verified",
        "rejected",
      ],
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

const Engineer = mongoose.model(
  "Engineer",
  engineerSchema
);

export default Engineer;