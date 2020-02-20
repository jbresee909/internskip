const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true
    },
    description: {
      type: String,
      trim: true,
      required: true
    },
    organization: {
      type: String,
      trim: true,
      required: true
    },
    projectCategory: {
      type: String,
      trim: true,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Project = mongoose.model("projects", projectSchema);

module.exports = Project;
