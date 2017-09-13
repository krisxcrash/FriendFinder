//Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Friendly matches

var newFriends = [{
    "name": "Frank",
    "photo": "http://rivista-cdn.reptilesmagazine.com/images/cache/cache_6/cache_e/cache_a/bearded-dragon-care-5001-4d13fae6.jpeg?ver=1503612446&aspectratio=1.5923566878981",
    "scores": [
        5,
        1,
        2,
        5,
        3,
        4,
        2,
        5,
        5,
        2
    ]
}, {
    "name": "Sadie",
    "photo": "http://cdn.akc.org/akccontentimages/BreedOfficialPortraits/hero/Australian-Shepherd.jpg",
    "scores": [
        3,
        4,
        3,
        1,
        2,
        4,
        4,
        3,
        5,
        1
    ]
}, {
    "name": "Bubba",
    "photo": "http://olnl.net/u23/photoB4E3/20589332951-0/original.jpg",
    "scores": [
        4,
        3,
        3,
        2,
        5,
        5,
        1,
        2,
        3,
        5
    ]
}, {
    "name": "Kiwi",
    "photo": "https://www.mpg.de/9327999/zoom-1437031803.jpg",
    "scores": [
        2,
        1,
        4,
        5,
        5,
        2,
        3,
        4,
        4,
        3
    ]
}, {
    "name": "Penelope",
    "photo": "https://media4.s-nbcnews.com/j/newscms/2016_36/1685951/ss-160826-twip-05_8cf6d4cb83758449fd400c7c3d71aa1f.nbcnews-ux-2880-1000.jpg",
    "scores": [
        1,
        1,
        2,
        4,
        5,
        4,
        3,
        5,
        3,
        2
    ]
}, {
    "name": "Abby",
    "photo": "https://i.pinimg.com/736x/dc/01/be/dc01be042adceea4d034f3bd640c831c--endangered-species-amphibians.jpg",
    "scores": [
        4,
        2,
        3,
        1,
        1,
        5,
        4,
        2,
        4,
        1
    ]
}];

//Routes 

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});


// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  