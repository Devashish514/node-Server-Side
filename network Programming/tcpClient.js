var net = require("net");

var port = 54321;
var host = '127.0.0.1';

var client = new net.Socket();

client.connect(port, host, () => {
    console.log('Client: Connected to Server');
    client.write("Hello Server! from Client");
});

client.on('data', (data) =>{
    console.log(`Client: Received ${data}`);
    client.end();
});

client.on('close', () => {
    console.log('Client: Disconnected from Server');
});