var express = require('express');

var app = express();

app.get("/", function (req, res) {
    res.send("Welcome to my home page");
})
app.get('/hello', function (req, res) {
    res.send("Hello Page");
})

app.listen(5005, function (err) {
    if (err) {
        console.log("Error occured while server startup");
        console.log(err);
    }
    if (!err) {
        console.log("Application is started successfully and running on port: 5005");
    }
})