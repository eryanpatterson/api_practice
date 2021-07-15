var express = require('express');
var app = express();

const public = __dirname + '/public';

app.use('/public', express.static(public));

const index = __dirname + '/views/index.html';

app.get('/', function(req, res) {
    res.sendFile(index);
});

let message = "";

if (process.env.MESSAGE_STYLE === "uppercase") {
    message = {"message": "Hello json".toUpperCase()};
} else {
    message = {"message": "Hello json"};
};

app.get('/json', function(req, res) {
    res.json(message);
});



































 module.exports = app;
