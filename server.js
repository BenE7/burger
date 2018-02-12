var express = require ("express");
var method = require ("method-override")
var body = require ("body-parser");
var PORT = 3306

var app = express();












app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});