const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();
const multer = require("multer");
const teamRoutes = require("./routes/team");
const PubsRoutes = require("./routes/publications");
const JoinusRoutes = require("./routes/joinus");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/resume");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

//Connect db
connectDB();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname, "resume")));
app.use(multer({ storage: fileStorage }).single("resume"));

app.use("/people", teamRoutes);
app.use("/publications", PubsRoutes);
app.use("/joinus", JoinusRoutes);

app.get("/", (req, res) => {
  res.render("index");
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server start on PORT ${PORT}`);
});
