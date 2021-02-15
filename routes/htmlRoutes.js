//bring in express router
const router = require("express").Router();

//npm package for serving files(core node module) passes files to front end
const path = require("path")

//html routes for excercise
router.get("/exercise", (req,res) => {
	res.sendFile(path.join(__dirname, "../public/exercise.html"));
})

//html routes for stats
router.get("/stats", (req,res) => {
	res.sendFile(path.join(__dirname, "../public/stats.html"));
})


module.exports = router;