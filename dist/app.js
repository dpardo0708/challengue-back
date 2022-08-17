"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3001, function () {
    console.log('escuchando el puerto 3001!');
});
