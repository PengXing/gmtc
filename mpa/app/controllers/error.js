/**
 * @file error.js
 * @author sekiyika(pengxing@baidu.com)
 */

'use strict'

module.exports = {

  /**
   * handle all errors
   *
   * @param {Context} ctx context
   * @param {Error} err error
   */
  handle: async function (ctx, err) {
    ctx.app.logger.error(err)
    // TODO 需要自定义实现
    ctx.body = await this.render('error', {error: err.message})
  }

}
