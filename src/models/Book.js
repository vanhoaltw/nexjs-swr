const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: [200, "Please keep The Title Short"],
    },
    description: { type: String },
    thumbnail: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models?.Book || mongoose.model("Book", BookSchema);
