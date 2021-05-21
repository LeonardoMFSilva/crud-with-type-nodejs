"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var port = 5000;
var server = http_1.createServer(function (request, response) {
    response.end("Hello World!!!");
});
//Execução do server
server.listen(port, function () {
    console.log("Server running on port " + port);
});
