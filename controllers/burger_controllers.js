var express = require ("express");
var burger = require ("../models/burger.js");
var router = express.Router();

router.get("/", function (req, res) {    
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.redirect("/burgers");
    });
});

router.get("/burgers", function (req, res){
    burger.all(function (data){
        res.render("index" , {Burgers: data})
        console.log(data);

    });

});

router.post("/api/burgers", function(req, res){
    burger.insert(req.body.burger_name, function (data){
        console.log(data);
        res.redirect("/burgers");
        });
    });

module.exports = router;