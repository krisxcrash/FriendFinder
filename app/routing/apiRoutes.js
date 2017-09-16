//Loads data
var newFriends = require("../data/friends.js");

//Routing
module.exports = function(app) {

    //API GET request
    app.get("/api/friends", function(req, res) {
        res.json(newFriends);
    });

// User's information from Survey - takes in JSON input
app.post("/api/friends", function(req, res) {
    var totalDifferences = [];
    var index = 0;
    var myScores = req.body.scores;

    for (var i = 0; i < newFriends.length; i++) {
        var totalDifference = 0;
        var friendScores = newFriends[i].scores;

        for (var j = 0; j < friendScores.length && j < myScores.length; j++) {
            var friendScore = friendScores[j];
            var myScore = myScores[j];
            var difference = friendScore - myScore;
            if (difference < 0) {
                difference = myScore - friendScore;
            }
            totalDifference += difference;
        }
        totalDifferences[i] = totalDifference;
        
    }
    var lowestDifference = totalDifferences[0];
    for (var k = 0; k < totalDifferences.length; k++) {
        if (totalDifferences[k] < lowestDifference) {
            lowestDifference = totalDifferences[k];
            index = k;
        }
    }
    res.json(newFriends[index]);






    // var newfriend = req.body;
    // newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();
  
    // newFriends.push(newfriend);
  
    // res.json(newfriend);
  }); 
};