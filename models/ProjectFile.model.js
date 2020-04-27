const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectFileSchema = new Schema(
  {
    key: {
      type: String,
      trim: true,
      required: true,
    },
    location: {
      type: String,
      trim: true,
      required: true,
    },
    originalname: {
      type: String,
      trim: true,
      required: true,
    },
    mimetype: {
      type: String,
      trim: true,
      required: true,
    },
    size: {
      type: Number,
      trim: true,
      required: true,
    },
    encoding: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProjectFiles = mongoose.model("project-files", projectFileSchema);

module.exports = ProjectFiles;
