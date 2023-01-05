//jshint esversion:6

const express = require('express');
const path = require('path');
const bodyParse = require('body-parser');
const app = express();

app.use(bodyParse.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/bmiCalculator', function(req, res) {
    res.sendFile(path.join(__dirname, 'bmiCalculator.html'));
});

app.post('/', function(req, res){
    
    num1 = Number(req.body.num1);
    num2 = Number(req.body.num2);

    calc = num1 + num2;
    
    res.send("The total is " + calc);
});

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

app.listen(3000, function (){
    console.log("Server started on Port 3000.");
});