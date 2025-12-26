const os = require("os");
console.log(os.arch());
console.log(os.platform());
console.log(os.totalmem()); 
//console.log(os.freemem());
console.log(os.cpus());
console.log(os.userInfo());
//console.log(os.uptime());
console.log(os.version());
console.log(os.type());
console.log(os.hostname());


const uptimeSeconds = os.uptime();
const uptimeHours = (uptimeSeconds / 3600).toFixed(2);

const freeMemBytes = os.freemem();
const freeMemMB = (freeMemBytes / (1024 * 1024)).toFixed(2);

console.log("System Uptime (hours):", uptimeHours);
console.log("Free Memory (MB):", freeMemMB);