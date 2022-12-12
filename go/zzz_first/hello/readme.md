- 初期化 (go mode init hogehoge)  
    - 参照：https://go.dev/ref/mod#go-mod-init  
        - The go mod init command initializes and writes a new go.mod file in the current directory, in effect creating a new module rooted at the current directory. The go.mod file must not already exist.  
    - 例  
        ```
            # 例
        $ go mod init example/hello
        ```
    - 参照その2:https://pkg.go.dev/cmd/go  
        - mod のことを`module maintenance`と記載しているので、`mod`は、`module`のことかな
- コンパイル＆実行 (go run)  
    - https://pkg.go.dev/cmd/go  
        - `run`は、`compile and run Go program`(コンパイルもしてくれるみたい)  
    - 例  
        ```
            # 例
        $ go run .
        ```
