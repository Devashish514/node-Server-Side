const { ServerResponse } = require("http");
var net = require("net");

var server = net.createServer((socket) => {
    socket.end("Hello and Good Bye!\n");
});
// shutting down the server

server.on("close",()=>{
    console.log("now its closed");
});

server.listen(8000,()=>{
    console.log(`listening at port 8000`);
    // server.close();
    server.unref(); // it is also used to terminate server if its the last thing in the event loop
});