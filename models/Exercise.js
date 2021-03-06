const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema(
    {
        name:
        {
            type: String,
            required: "Enter a specific exercise",
            trim: true,
        },

        type:
        {
            type: String,
            required: "Enter a type"
        },

        sets:
        {
            type: Number,
        },

        reps:
        {
            type: Number,
        },

        weight: {
            type: String,
        },

        duration:
        {
            type: Number,
            required: "How long was your workout?"
        },
        distance:
        {
            type: Number
        }

    });

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;