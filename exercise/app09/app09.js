const http= require('http');

const serve = function(req, res) {
    res.writeHead(200);
    res.end("Serving");
}
const server = http.createServer(serve);

server.listen(8080, "localhost", function(req, res) {
    console.log("server running");
})
