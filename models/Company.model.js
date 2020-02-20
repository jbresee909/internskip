const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema(
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

const Company = mongoose.model("companies", companySchema);

module.exports = Company;
