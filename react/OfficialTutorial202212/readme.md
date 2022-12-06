# React のチュートリアルの写経  
## URL
- https://ja.reactjs.org/tutorial/tutorial.html  
## メモ
- 準備  
    - git clone した場合は、Docker コンテナを作る
        ```
            # ターミナルアプリにて
        $ cd {docker-compose.ymlのあるディレクトリ}
        $ docker compose up -d
        $ docker exec -it react bash  # コンテナのシェルで下記を実行
        ```
    - プロジェクトの雛形を作成または、インストール　　
        ```
            # プロジェクトの雛形を作り直す場合
        > npx create-react-app my-app  
            # git clone して、インストールだけし直す場合
        > npm install
        ```
    - デフォルトで入っているソースを削除（git rm）して、index.js と index.css を作成  
    - `npm start` で実行  
    - Webブラウザで`http://localhost:3000/`にアクセス  

