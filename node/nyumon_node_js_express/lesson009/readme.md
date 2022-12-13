- Express についてメモ
    - 経路パラメータ (パスパラメータ)   
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
    - ミドルウェア関数  
        ```
        // リスト 9-4
        app.use((req, res, next) => {
            // リクエストのパスをログに出す
            console.log(`request made to: ${req.url}`);
            next(); // next関数を呼び出さないとリクエストがハングする
        });
        ```
