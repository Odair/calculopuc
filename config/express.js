var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());


module.exports = app;
