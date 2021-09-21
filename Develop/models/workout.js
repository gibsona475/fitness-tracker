const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            //required values whether cardio or resistance exercise 
            type: {
                type: String,
                trim: true,
                required: "Enter a type of exercise e.g resistance/cardio"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter a name for exercise"
            },
            duration: {
                type: Number,
                required: "Enter workout time in minutes"
            },
            // optional values 
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            },
        }
    ],

    

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
