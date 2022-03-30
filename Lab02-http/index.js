const http = require("http");
const fs = require("fs");
require("dotenv").config();

const serve = function(req, res) {
    if(req.method == "POST") {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end('{"message":"JSON"}');
    } else if(req.url == "/page1.html") {
        fs.readFile("./page1.html", function(err, data) {
            let statusCode;
            if(err) {
                statusCode = 404;
                data = "File Not Found";
            } else {
                statusCode = 200;
            }
            res.writeHead(statusCode);
            res.end(data);
        });
    } else if (req.url == "/page2.html") {
        fs.readFile("./page2.html", function(err, data) {
            if(err) {
                statusCode = 404;
                data = "File Not Found";
            } else {
                statusCode = 200;
            }
            res.writeHead(statusCode);
            res.end(data);
        });
    } else {
        fs.readFile("./index.html", function(err, data) {
            if(err) {
                statusCode = 404;
                data = "File Not Found";
            } else {
                statusCode = 200;
            }
            res.writeHead(statusCode);
            res.end(data);
        });
    }
}

const server = http.createServer(serve);
server.listen(process.env.PORT, function() {
    console.log(process.env.SERVER_RUNNING_ON_MSG, server.address().port);
})
