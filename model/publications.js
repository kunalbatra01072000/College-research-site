const mongoose = require("mongoose");

const PublicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  typeA: {
    type: String,
    required: true,
  },
  typeB: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Publication", PublicationSchema);
