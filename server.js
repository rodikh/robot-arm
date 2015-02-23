var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});


//
//var config = require('./config.json'),
//    app = require('express')(),
//    port = process.env.PORT || config.port;
//
//app.set('view engine', 'ejs');
//app.engine('html', require('ejs').renderFile);
//
//app.get('/', function(req, res){
//    res.render('index', { title: 'The index page!' })
//});
//
//var server = app.listen(port);
