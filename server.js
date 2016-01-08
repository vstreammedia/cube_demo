var util = require("util");
var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));

server.listen(3000, function () {
  console.log('Server listening at port 3000');
});

