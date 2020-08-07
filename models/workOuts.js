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

workoutsSchema.methods.totalTime = function () {
    this.totalDuration = 20; //this.totalDuration + `${this.duration}`
    return this.totalDuration;
    };

const workOut = mongoose.model("Workouts", workoutsSchema);

module.exports = workOut;
