const express = require("express");
const Team = require("../model/team");

const router = express.Router();

router.get("/", async (req, res) => {
  const teamPeople = await Team.find();
  const phd = [],
    mtech = [],
    btech = [];

  teamPeople.forEach((person) => {
    if (person.teamType === "phd")
      phd.push({
        name: person.name,
        email: person.email,
        linkedin: person.linkedin,
        college: person.college,
        imageUrl: person.imageUrl,
        _id: person._id,
      });
    else if (person.teamType === "mtech")
      mtech.push({
        name: person.name,
        email: person.email,
        linkedin: person.linkedin,
        college: person.college,
        imageUrl: person.imageUrl,
        _id: person._id,
      });
    else
      btech.push({
        name: person.name,
        email: person.email,
        linkedin: person.linkedin,
        college: person.college,
        imageUrl: person.imageUrl,
        _id: person._id,
        github: person.github,
        linkedin: person.linkedin,
      });
  });

  res.render("people", {
    phd,
    btech,
    mtech,
  });
});

router.get("/:personId", async (req, res) => {
  const personId = req.params.personId;

  const person = await Team.findById(personId);
  const aof = person.aof.join();
  res.render("person", {
    name: person.name,
    aof,
    qualif: person.qualif,
    pubs: person.publications,
    imageUrl: person.imageUrl,
    github: person.github,
    linkedin: person.linkedin,
  });
});

module.exports = router;
