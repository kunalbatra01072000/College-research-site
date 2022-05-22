const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  collegeYear: {
    type: Number,
    required: true,
  },
  studentType: {
    type: String,
    required: true,
    enum: [
      "Research Intern",
      "Full Time Research Associate",
      "BTech/Mtech Thesis",
    ],
  },
  resumeUrl: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Student", StudentSchema);
