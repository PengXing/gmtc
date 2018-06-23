/**
 * @file mpa app entry
 * @author sekiyika(pengxing@baidu.com)
 */

'use strict'

const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

// logger
app.use(async (ctx, next) => {
  let start = Date.now()
  await next()
  let ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

router.get('/', require('./actions/index'))

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(8080, () => {
  console.log('mpa server started')
})
