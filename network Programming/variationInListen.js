var net = require("net");

var server1 = net.createServer();
var server2 = net.createServer(function (socket) {
    //handle connection;
});

server2.on("listening", function () {
    console.log("Server2:");
    console.log(server2.address());
});
server1.listen(0, "127.0.0.1",()=> {
    console.log("Server1:");
    console.log(server1.address());
    server2.listen(server1);
})