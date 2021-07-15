var express = require('express');
var app = express();

const public = __dirname + '/public';

app.use('/public', express.static(public));

const index = __dirname + '/views/index.html';

app.get('/', function(req, res) {
    res.sendFile(index);
});




































 module.exports = app;
