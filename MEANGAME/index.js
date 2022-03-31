const express = require("express");
const path = require("path");
require("dotenv").config();
const routes = require("./router");

const app = express();
app.set("port", process.env.PORT);

app.use("/api", routes);

app.use(express.static(path.join(__dirname, process.env.PUBLIC_DIR)));

const server = app.listen(process.env.PORT, function() {
    console.log(process.env.SERVER_RUNNING_ON_MSG, server.address().port);
});