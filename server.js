// npm packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var PORT = 3000;

// Express
var app = express();
var port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Get css to work
app.use(express.static(path.join(__dirname, "./app/public")));


// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "./app/public/home.html"));
});
app.get("/survey", function(req, res) {
	res.sendFile(path.join(__dirname, "./app/public/survey.html"));
});

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Starts the server to begin listening
app.listen(port, function() {
  console.log("App listening on PORT " + PORT);
});