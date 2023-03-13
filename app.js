const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(res,res){

    var today = new Date();
    var currentDay = today.getDay();
    console.log(today.toString());
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = weekday[today.getDay()];

    if(currentDay===6 || currentDay===0)
    {
        res.sendFile(__dirname+"/index.html");
    }
    else{
        res.send("I have to work " + day);
    }
    
});

app.listen(process.env.PORT|3000, function(){
    console.log("Server started at port 3000");
});