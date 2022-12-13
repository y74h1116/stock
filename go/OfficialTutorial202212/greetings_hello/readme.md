- チュートリアル`Call your code from another module`の写経  
    - ※ディレクトリ名はチュートリアルに従わず、独自の名称にした  
- コマンドのメモ  
    - ディレクトリを準備  
        ```
        $ mkdir greetings_hello
        $ cd greetings_hello
        ```
    - 初期化  
        ```
        $ go mod init example.com/hello
        ```
    - go mod edit コマンド  
        - to use your local example.com/greetings module (ローカルの example.com/greetings モジュールを使うために)
            - ※デフォルトでは、公開されているモジュールを探すのでローカルのモジュールを参照するように設定する  
        - 参考 : https://go.dev/ref/mod#go-mod-edit
        - The go mod edit command provides a command-line interface for editing and formatting go.mod files
            ```
            $ go mod edit -replace example.com/greetings=../greetings_module
            ```
    - 参考 : https://go.dev/ref/mod#go-mod-tidy
        - go mod tidy ensures that the go.mod file matches the source code in the module.
            ```
            $ go mod tidy
            ```
    - 実行
        ```
        $ go run .
        ```
