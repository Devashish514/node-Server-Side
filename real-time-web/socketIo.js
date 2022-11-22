// const express = require("express");
// const app = express();

// const server = app.listen(3000, () => {
//     console.log("Listening at port 3000");
//     console.log("http://localhost:3000");
// })

// const io = require("socket.io")(server);

// const activeUser = new Set();

// io.on("connection", (socket) => {
//     console.log("Made socket connection");

//     socket.on("new User", (data) => {
//         socket.userId = data;
//         activeUser.add(data);
//         io.emit("new User", [...activeUser]);
//     });
//     socket.on("disconnect", () => {
//         activeUsers.delete(socket.userId);
//         io.emit("user disconnected", socket.userId);
//     });
//     socket.on("chat message", function (data) {
//         io.emit("chat message", data);
//     });
//     socket.on("typing", function (data) {
//         socket.broadcast.emit("typing", data);
//     });
// });



var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

var io = require('socket.io')(server);
var path = require('path');


// app.use(express.static(path.join(__dirname,'./public')));

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html');
// });


var name;

io.on('connection', (socket) => {
  console.log('new user connected');
  
  socket.on('joining msg', (username) => {
  	name = username;
  	io.emit('chat message', `---${name} joined the chat---`);
  });
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
    io.emit('chat message', `---${name} left the chat---`);
    
  });
  socket.on('chat message', (msg) => {
    socket.broadcast.emit('chat message', msg);         //sending message to all except the sender
  });
});

server.listen(3000, () => {
  console.log('Server listening on :3000');
});

