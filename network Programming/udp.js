var dgram = require("dgram");

var server = dgram.createSocket("udp4", (msg, rinfo) => {
    console.log("revied DATA");
});

server.bind(8000, () => {
    console.log("bound to", server.address());
});

//sending data over server

var client = dgram.createSocket("udp4");
var message = Buffer.from("hello");
client.send(message, 0, message.length, 8000, "127.0.0.1", (err, bytes) => {
    if (err) {
        console.error(err);
    }else{
        console.log("success",bytes);
    }
    client.close()
});