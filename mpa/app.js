/**
 * @file mpa app entry
 * @author sekiyika(pengxing@baidu.com)
 */

'use strict'

const Koa = require('koa')
const Router = require('koa-router')
const render = require('./view')

const app = new Koa()
const router = new Router()

// logger
app.use(async (ctx, next) => {
  let start = Date.now()
  await next()
  let ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// TODO: 需要开发者编辑的地方
router.get('/', async ctx => {
  ctx.body = render('index', {title: 'home page'})
})

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(8080, () => {
  console.log('started')
})
