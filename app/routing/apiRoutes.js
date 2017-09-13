var newFriends = require("../data/friends.js");

module.exports = function(app) {

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