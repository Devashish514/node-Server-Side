const net = require("net");   // net core module

// creating server to client-server connection in TCP.......

var port = 54321;
var host = '127.0.0.1';

var server = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log(`Server: Received ${data}`);
        socket.write("Hello Client from Server");
        socket.pipe(socket);
    });
    socket.on('end', () => {
        console.log('Server: Client Disconnected');
    });
});

server.on('connection', (socket) => {
    console.log(`Server: ${socket.remoteAddress}:${socket.remotePort} has connected`);
});

server.on('error', (err) => {
    throw err;
});

server.on('listening', () => {
    var address = server.address();
    console.log(`opened server on ${address.address}:${address.port}`);
});

server.listen(port,host);