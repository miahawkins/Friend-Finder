var path = require("path");
var friendsArray = require("../data/friends.js");

function apiRoutes() {
    // List of friends
    app.get("/api/friends", function(request, response) {

        response.json(friendsArray);
    });
    // Examine all friends in list
    app.post("/api/friends", function(request, response) {

        computeDifferencesInScore();
        friendsArray.push(answers);
    });
};

function computeDifferencesInScore() {
    var answers = request.body;
    var userScores = answers.scores;
    var resultName = "";
    var resultPic = "";
    var totalDifference = 100;

    // For each friend
    for (var i = 0; i < friendsArray.length; i++) {
        var difference = 0;

        // For each user response
        for (var j = 0; j < userScores.length; j++) {
            difference += Math.abs(userScores[j] - friendsArray[i].scores[j])
        }

        // The lowest difference is the match
        if (difference < totalDifference) {
            totalDifference = difference;
            resultName = friendsArray[i].name;
            resultPic = friendsArray[i].photo;
        }
    }
};

module.exports = apiRoutes();