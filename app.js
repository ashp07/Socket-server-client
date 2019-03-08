// Taking express
var express = require('express');
var app = express();

// Creating new server
var server = require('http').createServer(app);

//Taking socket
var io = require('socket.io')(server);

app.get('/', function(req,res)
{
    // res.send("Hello");
    res.sendFile(__dirname + '/index.html')
});

io.on('connection', function(client){
    console.log('New user connected...');

    client.on('join', function(data){
        console.log(data);
        client.emit('messages', 'Hello from server side')
    })
    client.on('disconnect', function () {
        console.log('user disconnected');
        console.log(' ');
    });
})

//Listening requests
server.listen(4200);