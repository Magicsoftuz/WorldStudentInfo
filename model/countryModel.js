const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    regionId: {
      type: mongoose.Schema.ObjectId,
      ref: "regions",
    },
  },
  {
    toJSON: true,
    toObject: true,
  }
);

// countrySchema.virtual("districts", {});

const Country = mongoose.model("countries", countrySchema);

module.exports = Country;
