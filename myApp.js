var express = require('express');
var app = express();

app.use(function(req, res, next){
  console.log(req.method, req.path, '-', req.ip)
  next()
})

app.use('/public', express.static(__dirname + '/public'))

app.get('/', function(req,res){
  // res.send('Hello Express')
  res.sendFile(__dirname + "/views/index.html")
})



app.get('/json', function(req,res){
  if(process.env['MESSAGE_STYLE'] === 'uppercase'){
    res.json({"message": "HELLO JSON"})
  } else {
    res.json({"message": "Hello json"})
  }
})

app.get('/now', function(req,res,next){
  req.time = new Date().toString()
  next()
}, function(req, res){
  res.json({time: req.time})
})
































 module.exports = app;
