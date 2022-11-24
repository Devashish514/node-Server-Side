const http = require('http');
const express = require("express");
const app = express();
var server = http.createServer(app);
const io = require("socket.io")(server);
// const { Socket } = require('telnet');

app.use(express.static("public"));



io.on("connection", (socket) => {
    socket.on("message", (data) => {
        socket.emit("echo", data);
    });
});

server.listen(8000);

