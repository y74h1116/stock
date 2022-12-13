const port = 8888;
const express = require("express");

const app = express();

// URLエンコードされたデータを解析する
app.use(
    // 参照 : https://expressjs.com/ja/api.html#express.urlencoded
    //   It parses incoming requests with urlencoded payloads
    //   URLエンコードされたペイロードをパースしてくれるということか
    express.urlencoded({
        extended: false
    })
);

// 参照 : https://expressjs.com/ja/api.html#express.json
//   It parses incoming requests with JSON payloads
//   この例では、application/x-www-form-urlencoded でポストしているから、express.json() は不要な気がする
app.use(express.json());

// ミドルウェア関数を定義
app.use((req, res, next) => {
    // リクエストのパスをログに出す
    console.log(`request made to: ${req.url}`);
    next(); // next関数を呼び出さないとリクエストがハングする
});

// ホームページ用のPOST 経路を定義
// ※curl コマンド例
//     - (例 1) curl -s -v -X POST http://localhost:8888/  -d "first_name=Jon&last_name=Wexler"
//     - (例 2 URLエンコードしている例) curl -s -v -X POST http://localhost:8888/  -d "aaaa=a+a+a"
app.post("/", (req, res) => {
    console.log(req.body);  // リクエスト本文をロギング
    console.log(req.query);
    res.send("POST Successful!");
});

app.get("/items/:vegetable", (req, res) => {
    console.log(req.params);
    console.log(req.body);  // GET メソッドでも、body は何か入ってくるのかな？
    console.log(req.url);
    console.log(req.query);
    // サーバーからクライアントへのレスポンスを発行
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
});

app.listen(port, () =>{
    console.log(`The Express.js server has started and is listening on port number:` + `${port}`);
});

