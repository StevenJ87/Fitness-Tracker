const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type:{
        type: String
      },
      name: {
        type: String
      },
      duration:{
        type: Number,
      },
      weight:{
        type: Number
      },
      reps:{
        type: Number
      },
      sets:{
        type: Number
      },
      distance:{
        type: Number
      }
    }
  ],
  totalDuration: Number
});

let totalTime = 0;

workoutsSchema.methods.totalTime = function () {
  console.log("hello");
    this.exercises.map(workout => {
      
      totalTime = totalTime + workout.duration;
    });
    this.totalDuration = totalTime;
    return this.totalDuration
    };

const workOut = mongoose.model("Workouts", workoutsSchema);

module.exports = workOut;
