const router = require("express").Router();
const { Workout, Exercise } = require("../../models"); 

router.get("/", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" },
            }
        }
    ])
    .then(dbWorkout => {
        res.json(dbWorkout);
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
        .then(dbExercise => Workout.findOneAndUpdate(
            { _id: id },
            { $push: { exercises: dbExercise } },
            { new: true }))
        .then(dbWorkout => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        }); 
});

router.get("/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" },
            }
        },
    ])
    .then(dbWorkout => {
        console.log("DBWORKOUT****", dbWorkout)
        res.json(dbWorkout);
    })        
    .catch(err => {
        res.status(400).json(err);
    });
})

module.exports = router;