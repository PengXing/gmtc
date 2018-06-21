/**
 * @file redis example
 * @author sekiyika(pengxing@baidu.com)
 */

module.exports = function (app) {
  return {
    async get (key) {
      app.logger.info(`redis-get:${key}`)
    },

    async set (key, value, opts) {
      app.logger.info(`redis-set:${key}:${value}:{${JSON.stringify(opts)}}`)
    }
  }
}
