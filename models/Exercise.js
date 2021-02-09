const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema(
    {
        name:
        {
            type: String,
            required: "Enter an exercise name",
            trim: true,
        },

        rep:
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