const httpStatus = require("http-status-codes");
const htmlContentTYpe = {
    "Content-Type": "text/html",
}
// routes オブジェクトは、POST と GET それぞれのリクエストに対応する経路情報を格納する
const routes = {
 "GET": {
    "/info": (req, res) => {
        res.writeHead(httpStatus.OK, {
            "Content-Type": "text/plain"
        });
        res.end("Welcome to the Info Page!");
    }
 },
 "POST": {
 },
};

// 経路のコールバック関数を処理する handle 関数を作る
// ※このコメント、書籍に記載されているそのままを写経したが、翻訳だからか言い回しが堅い感じ
exports.handle = (req, res) => {
    try {
        if (routes[req.method][req.url]) {
            routes[req.method][req.url](req, res);
        } else {
            res.writeHead(httpStatus.NOT_FOUND.htmlContentType);
            res.end("<h1>No such file exists.</h1>");
        }
    } catch (ex) {
        console.log("error:" + ex);
    }
};

// main.js から経路を登録するために、GET と POST の関数を作る
exports.get = (url, action) => {
    routes["GET"][url] = action;
};
exports.post = (url, action) => {
    routes["POST"][url] = action;
};
