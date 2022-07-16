const mongoose = require("mongoose");

// Maktab model

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  districtId: {
    type: mongoose.Schema.ObjectId,
    ref: "districts",
  },
});

const School = mongoose.model("schools", schoolSchema);

module.exports = School;
