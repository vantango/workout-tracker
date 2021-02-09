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

        reps:
        {
            type: Number,
            required: "Rep Count"
        },

        unit: {
            type: String,
            required: "Unit"
        },

        notes: String,
    });

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;