//jshint esversion:6

// Skeleton app with basic routes and responses
// launched to a local hosted port.
const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send("Welcome-not really.");
});

app.get('/contact', function(req, res) {
    res.send("Dont. I'll find you.");
});

app.get('/about', function(req, res) {
    res.send("This is me.");
});

app.listen(3000, function (){
    console.log("Server started on Port 3000.")
});