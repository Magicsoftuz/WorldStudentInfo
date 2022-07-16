const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  schoolId: {
    type: mongoose.Schema.ObjectId,
    ref: "schools",
  },
});

const Group = mongoose.model("groups", groupSchema);

module.exports = Group;
