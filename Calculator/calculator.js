//jshint esversion:6

// Initializes the express server, path, parser and app.
const express = require('express');
const path = require('path');
const bodyParse = require('body-parser');
const app = express();

// Uses the app with the parser for requests in JSON from user POST action.
app.use(bodyParse.urlencoded({extended: true}));

// This route returns the HTML file for the home page a basic calculator.
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// This route returns the HTML file for the bmi input page.
app.get('/bmiCalculator', function(req, res) {
    res.sendFile(path.join(__dirname, 'bmiCalculator.html'));
});

// This route is triggered after the POST request for the homepage basic calculator result. 
app.post('/', function(req, res){
    
    num1 = Number(req.body.num1);
    num2 = Number(req.body.num2);

    calc = num1 + num2;
    
    res.send("The total is " + calc);
});

// This route is triggered from the POST request from the bmi calculator page
// it parses the request and then calculates the bmi before returning the results
// in a message response.
app.post('/bmiCalculator', function(req, res){
    height = parseFloat(req.body.height);
    weight = parseFloat(req.body.weight);

    var heightSq = Math.pow(height, 2);
    var bmi = (weight / heightSq);
    var interpretation = "";
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi.toFixed(2) + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9 ) {
        interpretation = "Your BMI is " + bmi.toFixed(2) + ", so you have a normal weight.";
    } else {
        interpretation = "Your BMI is " + bmi.toFixed(2) + ", so you are overweight.";
    }

    res.send(interpretation);
});

// Function for local launch of server and confirmation message.
app.listen(3000, function (){
    console.log("Server started on Port 3000.");
});