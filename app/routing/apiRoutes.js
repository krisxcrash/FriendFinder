//Loads data
var newFriends = require("../data/friends.js");

//Routing
module.exports = function(app) {

    //API GET request
    app.get("/api/friends", function(req, res) {
        res.json(newFriends);
    });

    app.post("/api/new", function(req, res) {
        
    })
}


// User's information from Survey - takes in JSON input
app.post("/api/new", function(req, res) {
    var newfriend = req.body;
    newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();
  
    characters.push(newfriend);
  
    res.json(newfriend);
  }); 