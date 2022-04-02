const mongoose = require("mongoose");
require("./games-model");

mongoose.connect(process.env.DB_URL);

mongoose.connection.on("connected", function(err) {
    console.log("Connection to database successful");
})

mongoose.connection.on("error", function(err) {
    console.log("Problem connectiong to the database", err);
})

const endApplication = function(message, exitCode) {
    console.log(message);
    process.exit(exitCode);
}
process.on("SIGINT", () => mongoose.connection.close(endApplication("Disconnected from database", 0)));
process.on("SIGTERM", () => mongoose.connection.close(endApplication("Closing application", 0)))
process.on("SIGUSR2", function() {
    mongoose.connection.close(function() {
        console.log("Restarting application");
        process.kill(process.ppid, "SIGUSR2");
    });
});