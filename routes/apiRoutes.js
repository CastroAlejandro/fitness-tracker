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

API.addExercise()
router.put("/api/workouts/:id", (req, res) => {
	let workoutSchema = {
		day: new Date(),
		exercises: [
			{
				type: req.body.type,
				name: req.body.name,
				duration: req.body.duration || null,
				weight: req.body.weight || null,
				reps: req.body.reps || null,
				sets: req.body.sets || null,
				distance: req.body.distance || null
			}
		]
	}

	Workout.create(workoutSchema).then(result => {
		console.log(result);
		res.status(200).json({
			'message': 'Record inserted successfully'
		});
	}).catch(error => {
		console.log(error);
		res.status(500).json({
			'message': 'Error inserting record'
		});
	});
});

router.put("/api/workouts/:id", (req, res) => {
	console.log(req.body, req.params.id);
	console.log(req.params);
	Workout.findOneAndUpdate(
	  { _id: req.params.id },
	  {
  
		$push: { exercises: req.body },
	  },
	  { new: true, runValidators: true }
	)
	  .then((data) => {
  
		res.json(data);
	  })
	  .catch((err) => {
		res.json(err);
	  });
  });



// API.createWorkout
router.post("/api/workouts/", ({ body }, res) => {
	//This will create a workout based on the scheema

	Workout.create(body)
		.then(result => {
			res.json(result);
		})
		.catch(err => {
			res.json(err);
		});
});


module.exports = router;