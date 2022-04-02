require("dotenv").config();
require("./api/data/db");
const express = require("express");

const routes = require("./api/router");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", routes);
const server = app.listen(process.env.PORT, function() {
    console.log(process.env.SERVER_RUNNING_ON_MSG, server.address().port);
});