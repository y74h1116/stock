// getFile で使うモジュールをインポート
const fs = require("fs");
const { METHOD_FAILURE } = require("http-status-codes");
const httpStatus = require("http-status-codes");
const contentTypes = require("./contentTypes");

// ファイルを読み込んでレスポンスを返す getFile 関数をエクスポート
module.exports = {
    getFile: (file, res) => {
        fs.readFile(`./${file}`, (error, data) => {
            if (error) {
                res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentTypes.html);
                res.end("There was an error serving content!");
                // 書籍のサンプルでは、特に return していないが、ここで return した方がよさおうな気がする
            }
            res.end(data);
        });
    }
};