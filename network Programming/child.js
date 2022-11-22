var net = require("net");
var cp = require("child_process");
var server = net.createServer();
var child = cp.fork("child");

server.on("connection", (socket) => {
    socket.end("handled by parent");
});

server.listen(0, () => {
    child.send("server", server);
});

process.on("message", function (message, server) {
    if (message === "server") {
        server.on("connection", (socket) => {
            socket.end("handled by child")
        });
    }
});