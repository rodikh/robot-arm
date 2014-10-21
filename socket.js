var root = require('./app'),
    config = require('./config.json'),
    server = require('http').createServer(root.app),
    io = require('socket.io')(server),
    port = config.ioPort;

io.on('connection', function (socket) {

});

module.exports = io;