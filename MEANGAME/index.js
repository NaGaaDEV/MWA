require("dotenv").config();
require("./data/dbconnection").open();
const express = require("express");
const path = require("path");
const routes = require("./router");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("port", process.env.PORT);

app.use("/api", routes);

app.use(express.static(path.join(__dirname, process.env.PUBLIC_DIR)));

const server = app.listen(process.env.PORT, function() {
    console.log(process.env.SERVER_RUNNING_ON_MSG, server.address().port);
});