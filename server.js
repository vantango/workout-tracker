const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessdb", {
    useNewUrlParser: true,
});

app.get("/all", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

app.post("/addworkout", (req, res) => {
    db.Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

app.post("/addexercise/:workoutid", ({ body, params }, res) => {
    console.log("add exercise", body, params.workoutid);
    db.Exercise.create(body)
        .then(({ _id }) => db.Workout.findOneAndUpdate(params.workoutid, { $push: { exercises: _id } }, { new: true }))
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

app.put("/update/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true, runValidators: true })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

app.get("/previousworkout", (req, res) => {
    db.Workout.find().sort({
        _id: -1
    }).limit(1)
        .then(dbWorkout => {
            console.log(("latest record", dbWorkout));
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
})

app.get("/populateexercise", (req, res) => {
    db.Workout.find().sort({
        _id: -1
    }).limit(1)
        .then(dbWorkout => {
            console.log(("latest record", dbWorkout));
            if (dbWorkout.length > 0) {
                const latestWorkoutId = dbWorkout[0]._id
                console.log(latestWorkoutId);


                db.Workout.findOne({
                    _id: latestWorkoutId
                })
                    .populate("exercises")
                    .then(dbExercise => {
                        console.log(("populate exercise", dbExercise));
                        res.json(dbExercise);
                    })
                    .catch(err => {
                        res.json(err);
                    });
            }
        })
        .catch(err => {
            res.json(err);
        });
})


// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});