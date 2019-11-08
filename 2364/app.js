const Koa = require('koa')


const router = require('./routes/index')

const app = new Koa()


app.use(router.routes()).use(router.allowedMethods());

 
app.listen(3001)
console.log("服务启动成功，端口号:3001 ")
