const port = 8888;
const http = require("http");
const httpStatus = require("http-status-codes");
const fs = require("fs");

// エラー処理関数を作る
const sendErrorResponse = res => {
    res.writeHead(httpStatus.NOT_FOUND,{
        "Content-Type": "text/html",
    });
    res.write("<h1>File Not Found!</h1>");
    res.end();
};

http.createServer((req,res) => {
    let url = req.url;
    if (url.match(/\.html$/)) {
        res.writeHead(httpStatus.OK, {
            "Content-Type": "text/html",
        });
        customReadFile(`./views${url}`, res);
        // 書籍のサンプルに res.end() がなかった
    }　else if (url.match(/\.js$/)) {
        res.writeHead(httpStatus.OK, {
            "Content-Type": "text/javasctipt",
        });
        customReadFile(`./js${url}`, res);
        // 書籍のサンプルに res.end() がなかった
    }　else if (url.match(/\.css$/)) {
        res.writeHead(httpStatus.OK, {
            "Content-Type": "text/css",
        });
        customReadFile(`./css${url}`, res);
        // 書籍のサンプルに res.end() がなかった
    }　else if (url.match(/\.png$/)) {
        res.writeHead(httpStatus.OK, {
            "Content-Type": "image/png",
        });
        customReadFile(`./public/images${url}`, res);
        // 書籍のサンプルに res.end() がなかった
    } else {
        sendErrorResponse(res);
    }

}).listen(port);

console.log(`The server has started and is listeninig on port number: ${port}`);

// リクエストされた名前のファイルを探す
const customReadFile = (file_path, res) => {
    // ファイルは存在するのか
    if (fs.existsSync(file_path)) {
        fs.readFile(file_path, (error, data) => {
            if (error) {
                console.log(error);
                sendErrorResponse(res);
                return;
            }
            res.write(data);
            res.end();
        });
    } else {
        sendErrorResponse(res);
    }
};
