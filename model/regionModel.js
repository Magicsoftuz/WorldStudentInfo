const mongoose = require("mongoose");

const regionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  districtId: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "districts",
    },
  ],
});

const Region = mongoose.model("regions", regionSchema);

module.exports = Region;
