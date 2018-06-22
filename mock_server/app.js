/**
 * @file mock server entry
 * @author sekiyika(pengxing@baidu.com)
 */

'use strict'

const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const Router = require('koa-router')
const config = require('./config')

const app = new Koa()
const router = new Router()

Object.keys(config).forEach(key => {
  let method = 'get'
  let route = key
  let arr = key.replace(/\s+/, ' ').split(' ')
  if (arr.length > 1) {
    method = arr[0]
    route = arr[1]
  }
  method = method.toLowerCase()

  router[method](route, handler(config[key]))
})

// logger
app.use(async (ctx, next) => {
  let start = Date.now()
  await next()
  let ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(8079, () => {
  console.log('started')
})

/**
 * request handler
 *
 * @param {string|function} value value
 * @return function
 */
function handler (value) {
  return async function (ctx, next) {
    if (typeof value === 'string') {
      // 如果是 string，则认为是 json 文件地址
      ctx.body = fs.readFileSync(path.resolve(value))
    } else if (typeof value === 'function') {
      let res = value(ctx)
      if (res.then) {
        // 如果包含 then，则认为是 Promise
        ctx.body = await res
      } else {
        // 如果不是 Promise，则直接返回 function 返回的内容
        ctx.body = res
      }
    }

    ctx.set('Content-Type', 'text/javascript; charset=UTF-8')
    ctx.set('Access-Control-Allow-Origin', '*')
  }
}
