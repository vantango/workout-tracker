
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name:
    {
        type: String,
        required: "Please enter a workout!"
    },

    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ],

    date:
    {
        type: Date,
        required: true,
        default: Date.now
    },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;