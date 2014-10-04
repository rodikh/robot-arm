var Robot = require('./robot');

var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
    res.render('index', { title: 'The index page!' })
});

app.listen(3000);