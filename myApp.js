var express = require('express');
var app = express();

app.get('/', function(req,res){
  // res.send('Hello Express')
  res.sendFile(__dirname + "/views/index.html")
})

app.use(express.static(__dirname + "/public"))


































 module.exports = app;
