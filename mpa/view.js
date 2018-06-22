/**
 * @file view
 * @author sekiyika(pengxing@baidu.com)
 */

// 模板采用 etpl，语法可以看这个链接 https://github.com/ecomfe/etpl/blob/master/doc/syntax.md

'use strict'

const fs = require('fs')
const path = require('path')
const etpl = require('etpl')

let isDebug = process.env.NODE_ENV !== 'production'

let caches = new Map()

module.exports = function render (name, data) {
  let fn = caches.get(name)
  if (isDebug || !fn) {
    let filepath = path.resolve(path.join('templates', name + '.tpl'))
    let tpl = fs.readFileSync(filepath).toString()
    fn = getEtplEngine().compile(tpl)
    caches.set(name, fn)
  }

  return fn(data)
}

let engine
function getEtplEngine () {
  if (isDebug || !engine) {
    engine = new etpl.Engine()

    // 配置 etpl，https://github.com/ecomfe/etpl/blob/master/doc/config.md
    engine.config({
      commandOpen: '{{',
      commandClose: '}}',
      strip: true
    })

    // 先编译 layout
    let layout = fs.readFileSync(path.resolve(path.join('templates', 'layout.tpl')))
    engine.compile(layout.toString())
  }

  return engine
}
