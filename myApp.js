var express = require('express');
var app = express();

console.log("Hello World");

const index = __dirname + '/views/index.html';

app.get('/', function(req, res) {
    res.sendFile(index);
});




































 module.exports = app;
