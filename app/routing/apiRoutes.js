
app.get("/api/friends", function(req, res) {
    var chosen = req.params.characters;
  
    if (chosen) {
      console.log(chosen);
  
      for (var i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
          return res.json(characters[i]);
        }
      }
      return res.json(false);
    }
    return res.json(characters);
  });

// User's information from Survey - takes in JSON input
app.post("/api/new", function(req, res) {
    var newfriend = req.body;
    newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newfriend);
  
    characters.push(newfriend);
  
    res.json(newfriend);
  }); 