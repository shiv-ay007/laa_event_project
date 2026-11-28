import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      maxlength: 100,
    },
    contactNumber: {
      type: String,
      trim: true,
      default: "",
      maxlength: 25,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
      maxlength: 150,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      maxlength: 3000,
    },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
