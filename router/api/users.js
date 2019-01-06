const Router = require("koa-router")
const router = new Router()

// 引入模板
const Users = require("../../models/Users")

/**
 * @name 测试接口
 * @author wangwei
 * @description 测试user接口是否能够调通
 */
router.get('/test', ctx => (ctx.body = 'test'))
router.get('/test1', ctx => (ctx.body = {
    msg: 'test1'
}))

/**
 * @name 注册接口
 * @author wangwei
 * @description 获取注册信息
 */
router.post('/register', async ctx => {
    console.log(ctx.request.body)
})

module.exports = router.routes()