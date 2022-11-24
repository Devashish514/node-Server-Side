// winston is a third party logging module.
//Best part of winston is its asynchronous logging.
// npm install winston --save 

const winston = require("winston");
const fs = require("fs");

// winston.info("Hello winston!!");  //  ===  winston.log("info","Hello winston!!");
// winston.warn("Something is not looking good!!");
// winston.error("Something bad happened");

let path = "foo.txt";

fs.open(path, "r", (err, data) => {
    if (err) {
        winston.error("An error occurred while opening %s.", path, err); //there's no foo.txt file
    } else {
        winston.info("Successfully opened %s", path);
    }
});

// [winston] Attempt to write logs with no transports, which can increase memory usage: {"level":"error","message":"An error occurred while opening foo.txt."}


//Transports in Winston

//transports are essentially storage devices for logs.
//core transport types are "console","file","http"
//default is console

/**
 * console -> use to logging info to console
 * file-> logging to a output file or any other writable stream
 * http -> log data to an arbitrary http endpoint
 */

var logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            colorize: true
        }),
        new winston.transports.File({
            level: "error",
            filename: "output.txt"
        })
    ]
});

logger.info("foo");
logger.error("bar");

