require("dotenv").config();
const express = require("express");

const app = express();

app.get("*", function(req, res) {
    if(req.params.length < 1 || req.query.secondNumber == undefined)
        res.status(400).send("Bad Request");
    else {
        const firstNumber = parseInt(req.params[0].substr(1));
        const secondNumber = parseInt(req.query.secondNumber);
        let result = firstNumber + " + " + secondNumber + " = ";
        result += firstNumber + secondNumber;
        res.status(200).send(result);
    }
});

const server = app.listen(process.env.PORT, function() {
    console.log(process.env.SERVER_RUNNING_ON_MSG, server.address().port);
})