const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workOut = new Schema({
  day: {
    
  },
  exercises: [
    {
      type:{
        type: String,
        trim: true,
        required: "Please indicate the type of excersice that was completed"
      },
      name: {
        type: String,
        trim: true,
        required: "Please indicate the name of the exercise that was completed"
      },
      duration:{
        type: Number,
        required: "Please indicate how long tyhis exercise was performed for"
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
  ]
});

const workOut = mongoose.model("workOut", transactionSchema);

module.exports = workOut;
