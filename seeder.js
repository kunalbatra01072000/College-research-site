const fs = require("fs");
const mongoose = require("mongoose");
const config = require("config");

const Team = require("./model/team");
const Publications = require("./model/publications");
//Connect db

mongoose.connect(config.get("MONGO_URI"), {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

//Read json
const teamMembers = JSON.parse(
  fs.readFileSync(`${__dirname}/data/team.json`, "utf-8")
);

const pubs = JSON.parse(
  fs.readFileSync(`${__dirname}/data/publications.json`, "utf-8")
);

//Import into db

const importData = async () => {
  try {
    await Team.create(teamMembers);
    await Publications.create(pubs);
    console.log("data imported...");
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

//Delete data
const deleteData = async () => {
  try {
    await Team.deleteMany();
    await Publications.deleteMany();

    console.log("data destroyed ...");
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
