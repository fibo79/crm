var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + "/" + "style.css");
  });

app.get('/leaflet.css', function(req, res) {
    res.sendFile(__dirname + "/node_modules/leaflet/dist/" + "leaflet.css");
  });
 
 app.get('/leaflet.js', function(req, res) {
    res.sendFile(__dirname + "/node_modules/leaflet/dist/" + "leaflet.js");
  });
  app.get('/images/marker-icon-2x.png', function(req, res) {
    res.sendFile(__dirname + "/node_modules/leaflet/dist/images/" + "marker-icon-2x.png");
  });
  app.get('/images/marker-icon.png', function(req, res) {
    res.sendFile(__dirname + "/node_modules/leaflet/dist/images/" + "marker-icon.png");
  });
  app.get('/images/marker-shadow.png', function(req, res) {
    res.sendFile(__dirname + "/node_modules/leaflet/dist/images/" + "marker-shadow.png");
  });
  app.get('/positions.json', function(req, res) {
    res.sendFile(__dirname + "/positions.json");
  });
 app.get('/bootstrap.min.css', function(req, res) {
    res.sendFile(__dirname + "/bootstrap.min.css");
  });
  app.get('/Htmlscript.js', function(req, res) {
    res.sendFile(__dirname + "/Htmlscript.js");
  });

app.listen (5550, function () {
  console.log('Example app listening on port ((5550))!')
})
