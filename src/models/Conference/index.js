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
  locationCity: {
    type: String,
    require: true,
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
    id: {
      type: String,
      trim: true,
      require: true,
    },
    name: {
      type: String,
      trim: true,
      require: true,
    },
  },
  time: {
    type: String,
    trim: true,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },

  attendants: [String],
});
module.exports = mongoose.model("Conference", ConferenceSchema);
