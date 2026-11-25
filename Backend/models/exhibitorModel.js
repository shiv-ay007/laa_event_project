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

const exhibitorSchema = new mongoose.Schema(
  {
    registrationId: {
      type: String,
      required: true,
      unique: true,
    },

    // Company Details
    companyName: {
      type: String,
      required: true,
      trim: true,
    },

    contactPerson: {
      type: String,
      required: true,
      trim: true,
    },

    designation: {
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

    website: {
      type: String,
      trim: true,
      default: "",
    },

    // Exhibition Details
    industrySector: {
      type: String,
      required: true,
      enum: [
        "Luxury Interiors & Decor",
        "Architectural Lighting & Automation",
        "Structural & Facade Materials",
        "Tiles, Bathware & Stone",
        "Furniture & Outdoor Solutions",
        "Green Building Tech & HVAC",
        "Other Premium Products",
      ],
    },

    spaceRequired: {
      type: String,
      required: true,
      enum: [
        "Executive Stall (9 sqm)",
        "Gold Stall (18 sqm)",
        "Platinum Pavilion (36 sqm)",
        "Custom Open Space / Sponsor Deck",
      ],
    },

    specialRequirements: {
      type: String,
      trim: true,
      default: "",
    },

    // Brand Logo
    brandLogo: {
      type: documentSchema,
      default: null,
    },

    // Payment Details
    txnId: {
      type: String,
      required: true,
      trim: true,
    },

    paymentDate: {
      type: Date,
      default: null,
    },

    amount: {
      type: Number,
      default: null,
      min: 0,
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

const Exhibitor = mongoose.model(
  "Exhibitor",
  exhibitorSchema
);

export default Exhibitor;