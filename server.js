// bringing in express 
const express = require("express")

//port to run express in 
const PORT = 3002 

//creating an instance of express
const app = express();

//url encoding for JSON
app.use(express.urlencoded({extended: true}))
//pointed toward public directory where static files are
app.use(express.static("public"));

//allows port to be found
app.listen(PORT, () => {
	console.log(`App running on http://localhost:${PORT}`)
})