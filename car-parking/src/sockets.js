"use strict";
exports.__esModule = true;
var ws_1 = require("ws");
var wsoc = new ws_1.WebSocketServer({ port: 8888 });
wsoc.on("listening", function () { return console.log("listening....."); });
wsoc.on("connection", function (soc) {
    console.log("got the connection");
    var jsun = {
        name: "akash",
        age: 21
    };
    soc.send(JSON.stringify(jsun));
    soc.send("hello");
    soc.on("message", function (event) {
        soc.send(event);
    });
});
