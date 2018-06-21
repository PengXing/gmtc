/**
 * @file mockup server config
 * @author sekiyika(pengxing@baidu.com)
 */

'use strict'

module.exports = {
  // http://localhost:8079/api/user
  'GET /api/user': './data/user.json',
  // http://localhost:8079/api/user/1
  'GET /api/user/:id': function (ctx) {
    return {
      status: 0,
      message: '',
      data: {
        name: 'sekiyika'
      }
    }
  }
}
