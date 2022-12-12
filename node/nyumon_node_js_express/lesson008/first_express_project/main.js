const port = 8888;
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    // サーバーからクライアントへのレスポンスを発行
    res.send("Hello, Universe!");
}).listen(port, () =>{
    console.log(`The Express.js server has started and is listening on port number:` + `${port}`);
});

