/**
 * @file 入口
 * @author sekiyika(pengxing5501854@gmail.com)
 */

'use strict'

const semver = require('semver')

// 如果当前 node 版本低于 8.0.0，才进行编译，节省启动时间
if (semver.lt(process.versions.node, '8.0.0') && process.env.NODE_ENV !== 'production') {
  require('babel-register')
  require('babel-polyfill')
}

const app = require('akb')()

app.on('started', function () {
  console.log('server started')
})

app.run()
