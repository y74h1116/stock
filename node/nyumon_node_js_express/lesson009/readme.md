- 経路パラメータ (パスパラメータ) についてメモ  
    ```
    // リスト 9-2
    // パスパラメータ付きの経路を定義して
    // そのパラメータを利用する例
    app.get("/items/:vegetable", (req, res) => {
        res.send(req.params.vegetable);
    });

    ※ちなみに「http://hogehoge/items/aaa?vegetable=bbb」のように指定したら
    ちゃんと、
    req.params.vegetable に「aaa」が入り、
    req.query に「bbb」が入ってた。
    ```
