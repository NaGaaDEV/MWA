const mongoose = require("mongoose");
require("./student-model");

mongoose.connect(process.env.DB_URL);

mongoose.connection.on("connected", () => console.log(process.env.MSG_DB_CONNECTED));
mongoose.connection.on("disconnected", () => console.log(process.env.MSG_DB_DISCONNECTED));

const endApplication = function(message, exitCode) {
    console.log(message);
    process.exit(exitCode);
}
process.on("SIGINT", () => mongoose.connection.close(endApplication(process.env.MSG_DB_DISCONNECTED), 0));
process.on("SIGTERM", () => mongoose.connection.close(endApplication(process.env.MSG_DB_DISCONNECTED), 0));
process.on("SIGUSR2", function(){
    // mongoose.connection.close(function() {
    //     console.log(process.env.MSG_DB_DISCONNECTED);
    //     process.kill(process.ppid, "SIGUSR2");
    // })
})