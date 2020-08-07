const express = require("express");
const mongoose = require("mongoose");
const workOuts = require("./models/workOuts.js");
const path = require("path");

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
  .catch(err => {
    res.status(400).json(err);
  });
});

// Create new workout
app.post("/api/workouts", ({ body }, res) => {
  const workOut = new workOuts(body);
  workOut.totalTime();
  workOuts.create(workOut)
    .then(dbworkouts => {
      res.json(dbworkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// Add to a workout
app.put("/api/workouts/:id", (req, res) => {
  workOuts.findByIdAndUpdate(
    req.params.id, {
    $push: {
         exercises: {
                type: req.body.type,
                name: req.body.name,
                weight: req.body.weight,
                sets: req.body.sets,
                reps: req.body.reps,
                duration: req.body.duration,
                distance: req.body.distance
            }
      }
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

// Workout Dashboard stats
app.get("/api/workouts/range", (req,res) => {
  workOuts.find({})
  .then(dbworkouts => {
    res.json(dbworkouts);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

// Stats HTML API
app.get("/stats", (req,res) => {
  res.sendFile(path.join(__dirname, "./public/stats.html"))
  });

// Exercise HTML API
app.get("/exercise", (req,res) => {
  res.sendFile(path.join(__dirname, "./public/exercise.html"))
  });

app.listen(PORT, () => {
  console.log(`App running port ${PORT}`);
});
