const mongoose = require("mongoose");

const HeroSchema = new mongoose.Schema({
  superhero: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: [200, "Please Name The Hero"],
  },
  realname: {
    type: String,
    required: true,
    maxlength: [200, "Please keep The Name Short"],
  },
});

export default mongoose.models.Hero || mongoose.model("Hero", HeroSchema);
