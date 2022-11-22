const cluster = require("cluster");
var http = require("http");
var numCpu = require("os").cpus().length;

if (cluster.isMaster) {
    for (var i = 0; i < numCpu; i++){
        console.log("forking child");
        cluster.fork();
    }
}else{
    http.createServer((req,res)=>{
        console.log(process.pid + "request from" + req.url);
        res.writeHead(200);
        res.end("Hello world");
    }).listen(8000);
}









// console.log(numCpu);
// console.log(cluster);
/**
 * EventEmitter {
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  isWorker: false,
  isMaster: true,
  isPrimary: true,
  Worker: [Function: Worker],
  workers: {},
  settings: {},
  SCHED_NONE: 1,
  SCHED_RR: 2,
  schedulingPolicy: 2,
  setupPrimary: [Function (anonymous)],
  setupMaster: [Function (anonymous)],
  fork: [Function (anonymous)],
  disconnect: [Function (anonymous)],
  [Symbol(kCapture)]: false
}
 */