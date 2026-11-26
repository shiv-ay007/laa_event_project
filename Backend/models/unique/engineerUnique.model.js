import mongoose from "mongoose";

const engineerUniqueSchema = new mongoose.Schema(
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

const EngineerUnique = mongoose.model(
  "EngineerUnique",
  engineerUniqueSchema
);

export default EngineerUnique;