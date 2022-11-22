var proxyServer = require("http-proxy");

var server = [
    {
        host: "localhost",  
        port:8001
    },
    {
        host:"localhost",
        port:8002
    }
];

proxyServer.createServer((req,res,proxy)=>{
    var target = server.shift();

    console.log("proxying to " + JSON.stringify(target));
    proxy.proxyRequest(req,res,target);
    server.push(target);
}).listen(8000,()=>console.log("server connected\n" , "http://localhost:8001"));