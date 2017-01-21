// Dependencies
// =============================================================
var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Uses Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



//Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});