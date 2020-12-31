const mongoose = require("mongoose");

const ConferenceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  quota: {
    type: Number,
    required: true,
    trim: true,
  },
  isEnabled: {
    type: Boolean,
    require: true,
  },
  create: {
    type: Date,
    default: Date.now(),
  },
  createBy: {
    type: String,
    require: true,
  },
  attendants: [],
});
module.exports = mongoose.model("Conference", ConferenceSchema);
