var express = require("express");

var router = express.Router();
var smoothie = require("../models/smoothies.js");

router.get("/", function(req, res){
	res.redirect("/smoothies");
});

router.get("/smoothies", function(req, res){
	smoothie.selectAll(function(smoothieData){
		res.render("index", { smoothie_data: smoothieData})
	});
});

router.post("/smoothies/create", function(req, res){
	smoothie.insertOne(req.body.smoothie, function(result){
		console.log(result);
		res.redirect("/");
	});
});

router.put("/smoothies/update", function(req, res) {
	console.log(req.body)
	smoothie.updateOne(req.body.id, function(result){
		console.log(result);
		res.redirect("/");
	});
});

module.exports = router;