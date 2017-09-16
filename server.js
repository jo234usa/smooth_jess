var express = require ("express");
var methodOverride = require ("method-override");
var bodyParser = require ("body-parser");
var exphbs = require("express-handlebars");

var routes = require("./controllers/smoothie_controller.js");

var PORT = process.env.PORT || 3005;
var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended:false }));

app.use(methodOverride("_method"));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

app.listen(PORT, function(){
	console.log("Listening on port: " + PORT)
})


