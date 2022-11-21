FROM ubuntu:22.04

# Node.js、React のイメージを使わず、あえて、Ubuntu を使って、必要なものをインストールしてみる

WORKDIR /tmp

RUN apt update 

RUN apt-get update
RUN apt-get install -y curl

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

RUN node -v
RUN npm -v
RUN npx -v

EXPOSE 3000
EXPOSE 80
