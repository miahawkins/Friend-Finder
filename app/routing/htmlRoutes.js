var path = require("path");

function htmlRoutes() {
	// Basic route that sends the user first to the AJAX Page
	app.get("/", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.get("/survey", function(req, res) {
	  res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
};

module.exports = htmlRoutes();