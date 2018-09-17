FROM node:8.9.4-alpine
WORKDIR /app
COPY package.json .

RUN apk add --update git openssh alpine-sdk python \
&& npm i && npm install -g pm2

COPY . /app
