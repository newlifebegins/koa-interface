const Router = require("koa-router")

const router = new Router()

router.get('/test', ctx => (ctx.body = 'test'))
router.get('/test1', ctx => (ctx.body = 'test1'))

module.exports = router.routes()