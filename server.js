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

// Create new workout
app.post("/api/workouts", ({ body }, res) => {
  workOuts.insertMany(body)
    .then(dbworkouts => {
      res.json(dbworkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Edit a workout

// Range get

app.listen(PORT, () => {
  console.log(`App running port ${PORT}`);
});
