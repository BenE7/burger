var express = require ("express");
var method = require ("method-override")
var bodyParser = require ("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;

var exphbs = require ("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var routes = require("./controllers/burger_controllers.js")


app.use(routes);
app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});