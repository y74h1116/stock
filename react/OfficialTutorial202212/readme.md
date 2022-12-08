# React のチュートリアルの写経  
## URL
- https://ja.reactjs.org/tutorial/tutorial.html  
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
        # プロジェクトの雛形を作り直す場合
    > npx create-react-app my-app  
        # git clone して、インストールだけし直す場合
    > npm install
    ```
- デフォルトで入っているソースを削除（git rm）して、index.js と index.css を作成  
- `npm start` で実行  
- Webブラウザで`http://localhost:3000/`にアクセス  
### React Devtools  
- Chrome や Firefox では、React Devtools 拡張機能を使うと、開発者ツールで React のコンポーネントツリーを調べることができます。  
### 実装メモ  
- チュートリアルの「State のリフトアップ」にて  
    ```
    複数の子要素からデータを集めたい、または２つの子コンポーネントにお互いにやりとりさせたいと思った場合は、代わりに親コンポーネント内で共有の state を宣言する必要があります。
    親コンポーネントは props を使うことで子に情報を返すことができます。
    こうすることで、子コンポーネントが兄弟同士、あるいは親との間で常に同期されるようになります。
    ```
- 制御されたコンポーネント  
    - 参照：https://ja.reactjs.org/docs/forms.html#controlled-components  
- 関数コンポーネントとクラスコンポーネント  
    - 参照：https://ja.reactjs.org/docs/components-and-props.html

