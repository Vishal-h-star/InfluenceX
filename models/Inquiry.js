import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address."]
    },
    brandName: { type: String, required: true, trim: true, maxlength: 160 },
    budget: {
      type: String,
      required: true,
      enum: [
        "< $5k",
        "$5k - $15k",
        "$15k - $50k",
        "$50k - $100k",
        "$100k+"
      ]
    },
    message: { type: String, required: true, trim: true, maxlength: 4000 }
  },
  { timestamps: true }
);

export default mongoose.models.Inquiry ||
  mongoose.model("Inquiry", InquirySchema);
