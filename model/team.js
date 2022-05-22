const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  github: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  college: {
    type: String,
    required: true,
  },
  teamType: {
    type: String,
    required: true,
    enum: ["phd", "mtech", "btech"],
  },
  imageUrl: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  aof: [
    {
      type: String,
      required: true,
    },
  ],
  qualif: [
    {
      type: String,
      required: true,
    },
  ],
  publications: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = mongoose.model("Team", TeamSchema);
