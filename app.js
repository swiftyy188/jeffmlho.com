//npm run dev to start server

var express		= require("express"),
	app			= express(),
	bodyParser  = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.get("/", function(req,res){
	res.render("cover")
});
app.get("/dashboard", function(req,res){
	res.render("dashboard")
})

app.get("/experience", function(req,res){
	res.render("experience")
});
app.get("/technology", function(req, res){
	res.render("technology")
});




app.listen(3000, function(req, res){
	console.log("Jeff profile server started")
});