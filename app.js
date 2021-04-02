const express = require ("express");
const { response } = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

var items = [];

app.get("/", function (req, res){

    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var lowerCapsDay = today.toLocaleDateString("pt", options);
    var day = lowerCapsDay[0].toUpperCase() + lowerCapsDay.substr(1);

    res.render("list", {kindOfDay: day, newListItems: items});
 
});

app.post("/", function(req, res){
    var item = req.body.newItem;
    items.push(item);

    res.redirect("/");
})

app.listen(8090, function(){
    console.log("Running on port 8090");
});