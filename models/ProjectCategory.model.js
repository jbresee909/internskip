const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectCategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    imageURL: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const ProjectCategory = mongoose.model(
  "project-categories",
  projectCategorySchema
);

module.exports = ProjectCategory;
