// URL のパスと、レスポンスの対応マップ
const routeResponseMap = {
    "/info":"<h1>info Page</h1>",
    "/contact":"<h1>Contract Us</h1>",
};

const port = 8888;
const http = require("http");
const httpStatus = require("http-status-codes");
const app = http.createServer();

// リクエストを監視するリスナ
app.on("request", (req, res) =>{
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);

    // リクエストボディを取得し、文字列に変換して出力
    let body = [];
    req.on("data", (bodyData) => {
        console.log("req data");
        body.push(bodyData);
    });
    req.on("end", () => {
        console.log("req end");
        body = Buffer.concat(body).toString();
        console.log(`Request Body Contents: ${body}`);
    });

    // レスポンスヘッダー
    res.writeHead(httpStatus.OK, {
        "Content-TYpe": "text/html"
    });
    if (routeResponseMap[req.url]) {
        res.end(routeResponseMap[req.url]);
    } else {
        // デフォルトのHTMLをレスポンス
        res.end("<h1>Welcome!</h1>");
    }
});

// アプリケーションのサーバーにポート3000を監視させる
app.listen(port);
// サーバーが起動して、このポートを監視中
console.log(`The server has started and is listening on port number: ${port}`);
