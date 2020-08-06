const express = require("express");
const mongoose = require("mongoose");
const workOuts = require("./models/workOuts.js");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", {
  useNewUrlParser: true
});

// Showing Workouts
app.get("/api/workouts", (req,res) => {
  workOuts.find({})
  .then(dbworkouts => {
    res.json(dbworkouts);
  })
});

app.listen(PORT, () => {
  console.log(`App running port ${PORT}`);
});
