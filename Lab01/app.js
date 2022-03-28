const child_process = require('child_process');

console.log("1. Started.")
const newProcess = child_process.spawn("node", ["fibonacci.js"], {stdio:"inherit"})
console.log("4. Ended.")