const express = require("express");
const path = require("path");
require('dotenv').config();

const app = express();

app.post("/", function(req, res) {
    res.status(200).json({"message" : "JSON"});
})

app.use(express.static(path.join(__dirname, process.env.PUBLIC_DIR)));

app.set("port", process.env.PORT)
const server = app.listen(app.get("port"), function() {
    console.log(process.env.SERVER_RUNNING_ON_MSG, server.address().port);
})