const port = 8888;
const http = require("http");
const httpStatus = require("http-status-codes");
const fs = require("fs");

// URL を補完してファイルのパスにする関数を作る
const getViewUrl = url => {
    const regex = RegExp("\.html$");
    if (regex.exec(url)) {
        return `views${url}`;
    } else {
        // 終端に「html」が指定されていないなら、htmlを補完
        return `views${url}.html`;
    }
};

http.createServer((req,res) => {
    // ファイルのパスを取得
    let viewUrl = getViewUrl(req.url);
    // リクエストのURLを補完してfsでファイルを読み込み、レスポンス
    fs.readFile(viewUrl, (error, data) => {
        if (error) {    // エラーなら404を返す
            res.writeHead(httpStatus.NOT_FOUND);
            res.write("<h1>FILE NOT FOUND</h1>");
        } else {
            res.writeHead(httpStatus.OK, {
                "Content-Type": "text/html",
            });
            res.write(data);
        }
        res.end();
    });
}).listen(port);

console.log(`The server has started and is listeninig on port number: ${port}`);
