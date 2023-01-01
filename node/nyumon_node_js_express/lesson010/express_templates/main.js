const port = 8888;
const express = require("express");
const app = express();
const homeController = require("./controllers/homeController");

// Express のビューエンジンに EJS を設定する
app.set("view engine", "ejs");
    // ※書籍のメモ
    // app.set は、あらかじめ定義されたコンフィグレーション用の
    // 変数に値を代入する目的で、しばしば使われる。
    // アプリケーション設定プロパティとも呼ぶようだ。
    // ※参考
    //　https://expressjs.com/ja/api.html#app.set

app.get("/name", homeController.respondWithName);

app.listen(port, () =>{
    console.log(`The Express.js server has started and is listening on port number:` + `${port}`);
});
    