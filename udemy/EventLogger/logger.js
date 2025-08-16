import fs from "node:fs";
import os from "node:os";

import EventEmitter from "node:events"; 

class Logger extends EventEmitter {
  log(message) {
    this.emit("message", { message });
  }
}

const logger = new Logger();
const logFile = "./eventLog.txt";

const logTOFile = (event) => {
  const logMessage = `${new Date().toISOString()}- ${event.message} \n`;
  fs.appendFileSync(logFile, logMessage);
};

logger.on("message", logTOFile);

setInterval(() => {
  const memoryUsage = (os.freemem() / os.totalmem()) * 100;
  logger.log(`Current memory usage : ${memoryUsage.toFixed(2)}`);
}, 3000);

logger.log("Application started");
logger.log("application event occured");
