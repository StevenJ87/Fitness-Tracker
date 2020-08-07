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

const workOut = mongoose.model("Transaction", workoutsSchema);

workoutsSchema.methods.totalTime = function () {
    this.totalDuration = this.totalDuration + `${this.duration}`
    return this.totalDuration;
    };

module.exports = workOut;
