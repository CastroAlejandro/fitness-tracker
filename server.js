// bringing in express 
const express = require("express");
const mongoose = require("mongoose")

const logger = require("morgan");

//port to run express in 
const PORT = process.env.PORT || 8080;

//creating an instance of express
const app = express();

//create instance of logger
app.use(logger("dev"));

//url encoding for JSON
app.use(express.urlencoded({ extended: true }));
//pointed toward public directory where static files are
app.use(express.static("public"));
app.use(express.json());

mongoose.connect("mongodb://localhost/workout", {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true
});

//require the routes
app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/apiRoutes"));

//allows port to be found
app.listen(PORT, () => {
	console.log(`App running on http://localhost:${PORT}`)
});