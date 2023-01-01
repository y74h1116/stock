- Lesson 10 メモ
    ```
    $ mkdir express_templates
    $ cd express_templates
        # 初期化(package.jsonの生成)
        # エントリポイントに main.js を指定する
    $ npm init
        # express インストール
    $ npm install express
        # ejs パッケージをインストール
        # 書籍には「--save」が記載されていたが、最近の npm コマンドでは、デフォルトで、--save の機能が有効みたい  
        # 参照： https://docs.npmjs.com/cli/v9/commands/npm-install#save  
        # > save
        # > Default: true unless when using npm update where it defaults to false
    $ npm install ejs
    ```
- ※書籍からメモ：app.set (アプリケーション設定プロパティ)  
    - app.set は、あらかじめ定義されたコンフィグレーション用の変数に値を代入する目的で、しばしば使われる。  
    - アプリケーション設定プロパティとも呼ぶようだ。  
    - ※参考  
        - https://expressjs.com/ja/api.html#app.set  
