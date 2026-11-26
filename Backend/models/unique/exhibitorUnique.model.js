import mongoose from "mongoose";

const exhibitorUniqueSchema = new mongoose.Schema(
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

const ExhibitorUnique = mongoose.model(
  "ExhibitorUnique",
  exhibitorUniqueSchema
);

export default ExhibitorUnique;