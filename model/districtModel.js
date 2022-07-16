const mongoose = require("mongoose");

// Tuman Schema

const districtSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const District = mongoose.model("districts", districtSchema);

module.exports = District;
