/**
 * @file routes config
 * @author sekiyika(px.pengxing@gmail.com)
 */

'use strict'

module.exports = {

  enableDefaultRoutes: true,

  routes: {

    '/': 'sample',

    // for api
    '/api/:module/:action': '{module}/api/{action}',

    // 静态文件
    // 除type, target, root 等其他配置参考  https://github.com/pillarjs/send#api
    '/assets/(.*)': {
      type: 'static',
      target: '/assets/{0}',
      root: './public',
      // max age
      maxAge: 365 * 24 * 3600 * 1000,
      index: false,
      dotfiles: 'deny',
      lastModified: true,
      etag: true
    },

    '/favicon.ico': {
      type: 'static',
      target: '/assets/favicon.ico',
      root: './public',
      maxAge: 365 * 24 * 3600 * 1000
    },

    '/monitor': function (app) {
      return async ctx => {
        ctx.body = '<!-- STATUS 200 -->'
      }
    }

  }

}
