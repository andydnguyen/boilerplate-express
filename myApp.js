var express = require('express');
var app = express();

app.get('/', function(req,res){
  // res.send('Hello Express')
  res.sendFile(__dirname + "/views/index.html")
})

app.use('', function(req,res){
  express.static(__dirname + "/public")
})


































 module.exports = app;
