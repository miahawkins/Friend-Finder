var path = require("path");
var friendsArray = require("../data/friends.js");


function apiRoutes(app) {
    // List of friends
    app.get("/api/friends", function(request, response) {
    	
        response.json(friendsArray);
    });
    // Examine all friends in list
    app.post("/api/friends", function(request, response) {

        computeDifferencesInScore(request, response);
    });
};

function computeDifferencesInScore(request, response) {
    var answers = request.body;
    // console.log(Array.isArray(request.body));
    // for (var key in Object.keys(request.body)) {  
    // 	console.log(Array.isArray(key)) 
    // }
    var userScores = answers.scores;
    var resultName = "";
    var resultPic = "";
    var totalDifference = 1000;

    // For each friend
    for (var i = 0; i < friendsArray.length; i++) {
        var difference = 0;

        // For each user response
        for (var j = 0; j < userScores.length; j++) {
            difference += (Math.abs(userScores[j] - friendsArray[i].scores[j]));
        }

        // The lowest difference is the match
        if (difference < totalDifference) {
            totalDifference = difference;
            resultName = friendsArray[i].name;
            resultPic = friendsArray[i].photo;
        }
        
    }
    friendsArray.push(answers);
    response.json({
    	resultName: resultName,
    	resultPic: resultPic
    });
}

module.exports = apiRoutes;
