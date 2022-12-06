- セットアップ〜実行
    ```
    # docker コンテナを起動していないなら、起動
    $ cd クローンしたディレクトリ/node
    $ docker compose up -d    # Docker ビルド〜コンテナ作成
    
    # 関連モジュールなどをインストールし、実行
    $ docker exec -it node bash    # コンテナのシェル (bash) を実行
        > cd zzz_first/lesson006/serve_html
        > npm install    # インストール
        > node main_06_04.js    # 実行
    ```
