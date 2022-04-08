require("dotenv").config();
require("./api/data/db");

const express = require("express");
const path = require("path");
const routes = require("./api/router");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("port", process.env.PORT);
app.use("/api", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE")
    next();
})

app.use("/api", routes);

app.use(express.static(path.join(__dirname, process.env.PUBLIC_DIR)));

const server = app.listen(process.env.PORT, function() {
    console.log(process.env.SERVER_RUNNING_ON_MSG, server.address().port);
});