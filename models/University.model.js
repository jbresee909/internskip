const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const universitySchema = new Schema(
  {
    name: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const University = mongoose.model("universities", universitySchema);

module.exports = University;
