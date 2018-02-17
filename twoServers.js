var http = require("http");

var PORT = 7000;
var PORT2 = 7500;

function handleRequest(request, response) {
    response.end(`green`);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function () {
    console.log(`We live y'all http://localhost/${PORT}`);
})

function handleRequest2(request, response) {
    response.end(`Stir Fry`);
}

var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function () {
    console.log(`We live y'all http://localhost/${PORT2}`);
})