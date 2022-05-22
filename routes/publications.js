const express = require("express");
const Publications = require("../model/publications");

const router = express.Router();

router.get("/", async (req, res) => {
  const pubs = await Publications.find().limit(10);
  const pdata = pubs.map((p) => p.name);
  res.render("publications", {
    pdata,
  });
});

module.exports = router;
