const port = 8888;
const http = require("http");
const httpStatus = require("http-status-codes");
const fs = require("fs");

const routeMap = {
    "/": "views/index.html",
    "/index.html": "views/index.html",
};

http.createServer((req,res) => {
    res.writeHead(httpStatus.OK, {"Content-Type":"text/html"});
    if (routeMap[req.url]) {
        // マップされたファイルを読んで、その内容を応答する
        fs.readFile(routeMap[req.url], (error, data) => {
            res.write(data);
            res.end();
        });
    } else {
        res.end("<h1>Sorry, not found.</h1>");
    }
}).listen(port);

console.log(`The server has started and is listeninig on port number: ${port}`);
