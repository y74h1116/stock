const httpStatus = require("http-status-codes");
const contentTypes = require("./contentTypes");
const utils = require("./utils");

// 経路の関数を入れる routes オブジェクト
const routes = {
    "GET": {},
    "POST": {},
};

// リクエストを処理する handle 関数
exports.handle = (req, res) => {
    try {
        routes[req.method][req.url](req, res);
    } catch (e) {
        res.writeHead(httpStatus.OK, contentTypes.html);
        utils.getFile("views/error.html", res);
    }
};

// GET メソッドの経路関数をマップする関数
exports.get = (url, action) => {
    routes["GET"][url] = action;
};

// POST メソッドの経路関数をマップする関数
exports.post = (url, action) => {
    routes["POST"][url] = action;
};

