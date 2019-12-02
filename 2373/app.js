// app.js
const http = require('http');
const Koa = require('koa');
const WebSocket = require('ws');
const app = new Koa();

const WebSocketApi = require('./util/ws');//引入封装的ws模块

const server = http.createServer(app.callback())

const wss = new WebSocket.Server({// 同一个端口监听不同的服务
    server
});

WebSocketApi(wss)

server.listen(3000)
console.log("服务启动成功，端口号:3002 ")