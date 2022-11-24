const cluster = require("cluster");
var express = require('express');
var numCpu = require("os").cpus().length;
const app = express();

// console.log(numCpu);

app.get("/", (req, res) => {
    for (let i = 0; i < 1e8; i++) {
        //doing nothing
    }
    res.send(`Ok from ${process.pid}`);
    // cluster.worker.kill();
})

if (cluster.isMaster) {
    for (var i = 0; i < numCpu; i++) {
        console.log("forking child");
        cluster.fork();  //workers or child process
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        cluster.fork();
    })
} else {
    app.listen(8000, () => {
        console.log(`server ${process.pid} running @ http://localhost:8000 `);
    })
}

// app.listen(8000, () => {
//     console.log(`server ${process.pid} running @ http://localhost:8000 `);
// })









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