- セットアップ〜実行
    ```
    # docker コンテナを起動していないなら、起動
    $ cd クローンしたディレクトリ/node
    $ docker compose up -d    # Docker ビルド〜コンテナ作成
    
    $ 書籍のサンプルファイルが github に公開されているので、LESSON 7 のサンプルから以下をコピーして、confetti_cuisine 直下に配置する
    - public ディレクトリ
    - views ディレクトリ

    # 関連モジュールなどをインストールし、実行
    $ docker exec -it node bash    # コンテナのシェル (bash) を実行
        > cd zzz_first/lesson007/confetti_cuisine/
        > npm install    # インストール
        > node main    # 実行
    ```
