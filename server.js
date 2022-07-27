

var express=require('express');
var app=express();

app.get('/',(req,resp)=>{

    resp.send(
        "<h1>Krishna Lilhare</h1>"+
        "<hr>"+
        "<h2>Hobbies</h2>"+
        "<br>"+
        "<ol>"+
        "<li>Playing cricket</li>"+
        "<li>lisning music</li>"+
        "<li>Watching movies</li>"+
        "<li>Love traveling</li>"+
        "</ol>"
    )
});


var server=app.listen(9000);
console.log("server started........");