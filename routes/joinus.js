const express = require("express");
const Student = require("../model/student");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("joinus");
});

router.post("/", async (req, res) => {
  const resumeFile = req.file;
  const { name, email, college, collegeYear, studentType } = req.body;
  const resumeUrl = resumeFile.path;
  const student = new Student({
    name,
    email,
    college,
    collegeYear,
    studentType,
    resumeUrl,
  });
  await student.save();

  return res.redirect("/joinus");
});

module.exports = router;
