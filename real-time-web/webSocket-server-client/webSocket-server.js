// WEB socket API
// webSocket are a relatively new feature of HTML5.

// websockets are not supported in node core , but we can use 3rd party modules.

const express = require("express");
const http = require("http");
const app = express();

const webSocketServer = require("ws").Server;
var server;
var wsServer;   // an instance of webSocket server.

app.use(express.static("public"));
server = http.createServer(app);

wsServer = new webSocketServer({
    server:server      //server is passed to the webSocket constructor allowing "WS" and "HTTP" server to coexist on same port;
});

wsServer.on("connection",(ws)=>{
    ws.on("message",(msg,flags)=>{
        ws.send(msg,flags);
    });
});

server.listen(8000);




