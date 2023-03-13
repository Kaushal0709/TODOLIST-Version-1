const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// using the ejs template
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
var todos=["Buy food", "Cook Food"];

app.get("/", function(res,res){

    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);
    res.render("list",{KindOfDay:day,newListItems:todos});
    
    
});

app.post("/", function(req,res){
    todo = req.body.newItem;
    console.log(todo);
    todos.push(todo);
    res.redirect("/");

})

app.listen(process.env.PORT|3000, function(){
    console.log("Server started at port 3000");
});