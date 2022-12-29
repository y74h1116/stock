# React Router のチュートリアル  
## URL
- https://reactrouter.com/en/main/start/tutorial  
## メモ
### 準備  
- git clone した場合は、Docker コンテナを作る
    ```
        # ターミナルアプリにて
    $ cd {docker-compose.ymlのあるディレクトリ}
    $ docker compose up -d
    $ docker exec -it react bash  # コンテナのシェルで下記を実行
    ```
- プロジェクトの雛形を作成または、インストール　　
    ```
        # Viteでプロジェクト作成 (create-react-app ではない)
    npm create vite@latest  my-app  -- --template react
        # follow prompts
    cd  my-app
    npm install react-router-dom@6 localforage match-sorter sort-by
        
        # git clone して、インストールだけし直す場合
    > npm install
    ```
- vite.config.js を修正した
    ```
    host: true, を設定した。
    ※調査しきれていないが、Docker コンテナの中で localhost でリッスンしていると、うまくいかないケースがあるようだ
    ```
- `npm run dev` で実行  
    ```
    ※もしエラーになるようなら、
    環境変数 NODE_ENV が production に設定されているかも
    docker-compose.yml や Dockerfile を確認して
    NODE_ENV を development にしてみる
    ```
- Webブラウザで`http://localhost:5173/`にアクセス  
    - ポート番号 5173 は、vite のデフォルト設定のようだ。
    - ポート番号を変更するには、vite.config.js を更新する。

