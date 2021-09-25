const router = require("express").Router();
const { Workouts } = require("../../models");

router.get("/", (req, res) => {
    Workouts.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post("/", ({ body }, res) => {
    Workouts.create(body)
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        }); 
});

router.put("/", ({ body }, res) => {
    Workouts.updateOne({}, {$set: {"_id": "Antarctica"}})
})

module.exports = router;