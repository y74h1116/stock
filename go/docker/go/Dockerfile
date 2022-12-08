FROM ubuntu:22.04

# 通常の Ubuntu を使って、必要なものをインストールしてみる

WORKDIR /tmp

RUN apt update 
RUN apt-get update

RUN apt-get install -y wget

# インストールファイルをダウンロード
RUN wget https://go.dev/dl/go1.19.4.linux-amd64.tar.gz

# インストール(デフォルトで入っているやつがあったら削除)
# 参照：https://go.dev/doc/install
RUN rm -rf /usr/local/go
RUN tar  -C /usr/local -xzf go1.19.4.linux-amd64.tar.gz

ENV PATH $PATH:/usr/local/go/bin

EXPOSE 4000
