/**
 * @file example.js
 * @author sekiyika(pengxing@baidu.com)
 */

'use strict'

module.exports = function (app) {
  return function () {
    app.logger.info('cron task example ' + new Date())
  }
}
