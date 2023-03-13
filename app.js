const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// using the ejs template
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(res,res){

    var today = new Date();
    var currentDay = today.getDay();
    console.log(today.toString());
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = weekday[today.getDay()];
    var dayofWeek="";

    if(currentDay===6 || currentDay===0)
    {
        dayofWeek = day;
    }    
    else{
        dayofWeek = day;
    }
    res.render("list",{KindOfDay:dayofWeek});
    
    
});

app.listen(process.env.PORT|3000, function(){
    console.log("Server started at port 3000");
});