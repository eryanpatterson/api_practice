var express = require('express');
var app = express();

const public = __dirname + '/public';

app.use('/public', express.static(public));

const index = __dirname + '/views/index.html';

app.get('/', function(req, res) {
    res.sendFile(index);
});

const message = {"message": "Hello json"};

app.get('/json', function(req, res) {
    process.env.MESSAGE_STYLE === 'uppercase' ?
    res.json(str.toUpperCase(message)) :
    res.json(message);
});



































 module.exports = app;
