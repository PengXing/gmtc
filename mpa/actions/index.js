/**
 * @file index action
 * @author sekiyika(pengxing@baidu.com)
 */

'use strict'

const axios = require('axios')
const render = require('../view')
const config = require('../config')

module.exports = async ctx => {
  let data
  let res = await axios.get(`${config.API_HOST}${config.GET_USER}`)
  if (res.status === 200) {
    data = res.data
  } else {
    throw new Error(`res.status = ${res.status}`)
  }

  if (data.status !== 0) {
    throw new Error(data.message)
  }

  data = data.data

  ctx.body = render('index', {
    title: 'home page',
    name: data.name
  })
}
