import mongoose from "mongoose";

const architectUniqueSchema = new mongoose.Schema(
  {
    year: {
      type: Number,
      required: true,
      unique: true,
    },

    sequence: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const ArchitectUnique = mongoose.model(
  "ArchitectUnique",
  architectUniqueSchema
);

export default ArchitectUnique;