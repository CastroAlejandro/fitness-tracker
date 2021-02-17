const router = require("express").Router();
const { Mongoose } = require("mongoose");
//
const Workout = require("../models/workout");

API.getLastWorkout
router.get("/api/workouts", (req, res) => {
	Workout.find({})
		.then(dbResult => res.json(dbResult))
		.catch(err => console.log(err))
});




module.exports = router;