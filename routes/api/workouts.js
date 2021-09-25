const router = require("express").Router();
const { Workout, Exercise } = require("../../models");

router.get("/", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post("/", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        }); 
});

router.put("/:id", (req, res) => {
     const id = req.params.id
     Exercise.create(req.body)
        .then((dbExercise) => Workout.findOneAndUpdate(
            { _id: id },
            { $push: { exercise: dbExercise } },
            { new: true }))
        .then(dbWorkout => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    //  Workout.findByIdAndUpdate(id, req.body, {new:true})
    //     .populate("exercise")
    //     .then(dbWorkout => {
    //         console.log(dbWorkout);
    //         res.json(dbWorkout);
    //     })
    //     .catch(err => {
    //         res.status(400).json(err);
    //     }); 
});

module.exports = router;