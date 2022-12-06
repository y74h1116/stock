const port = 8888;
const http = require("http");
const httpStatusCodes = require("http-status-codes");
const router = require("./router_06_05");
const fs = require("fs");
const plainTextContentType = {
    "Content-Type": "text/plain",
};
const htmlContentType = {
    "Content-TYpe": "text/html",
};

// リクエストされた名前のファイルを探す
// ※なぜか、前のサンプルと少し変えてある
// ※レスポンスしているから、ReadAndResponse みたいな関数になっている
const customReadFile = (file_path, res) => {
    fs.readFile(file_path, (errors, data) => {
        if (errors) {
            console.log("Error reading the file...");
            //sendErrorResponse(res);
            //return;
        }
        //res.write(data);
        res.end(data);
    });
};

// get と post で経路を登録する
router.get("/", (req, res) => {
    res.writeHead(httpStatusCodes.OK, plainTextContentType);
    res.end("INDEX");
});

router.get("/index.html", (req, res) => {
    res.writeHead(httpStatusCodes.OK, htmlContentType);
    customReadFile("views/index.html", res);
});

router.post("/", (req, res) => {
    res.writeHead(httpStatusCodes.OK, plainTextContentType);
    res.end("POSTED");
});

http.createServer(router.handle).listen(port);

console.log(`The server has started and is listeninig on port number: ${port}`);
