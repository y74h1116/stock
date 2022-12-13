const port = 8888;
const express = require("express");

const app = express();

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

