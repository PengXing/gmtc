/**
 * @file config
 * @author sekiyika(pengxing@baidu.com)
 */

'use strict'

module.exports = {
  // API HOST 地址
  API_HOST: process.env.NODE_ENV !== 'production' ? 'http://localhost:8079' : 'http://localhost:8078',
  // 获取用户信息
  GET_USER: '/api/user'
}
