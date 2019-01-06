const Koa = require("koa")
const Json = require("koa-json")
const Router = require("koa-router")
const mongoose = require("mongoose")
const bodyParser = require('koa-bodyparser')

const app = new Koa()
app.use(bodyParser())
const router = new Router()

app.use(Json())

// router.get('/test', ctx => (ctx.body = 'test'))
// app.use(async ctx => (ctx.body = {
//     msg: 'Hello Word!'
// }))

// 配置路由的路径
const users = require("./router/api/users")
router.use('/api/users', users)

// 配置路由
app.use(router.routes()).use(router.allowedMethods())

// 连接数据库
mongoose.connect('mongodb://koa:wei112012232@ds135852.mlab.com:35852/koa-api', {
    useNewUrlParser: true
}).then(() => console.log('mongoose is connected')).catch(err => console.log(err))

// 监听端口
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server start on ${port}`))