require("dotenv").config();
const express = require("express");

const routes = require("./router");

const app = express();
app.use("/api", routes);

const server = app.listen(process.env.PORT, function() {
    console.log(process.env.SERVER_RUNNING_ON_MSG, server.address().port);
})