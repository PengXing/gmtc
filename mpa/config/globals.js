/**
 * @file globals
 * @author sekiyika(pengxing@baidu.com)
 */

'use strict'

module.exports = {

  /**
   * env, at most time, this property should be development or production
   *
   * @type {string}
   */
  env: 'production',

  /**
   * app name
   *
   * @type {string}
   */
  appname: 'demo',

  /**
   * appdir, will be changed after config loaded.
   *
   * @type {string}
   */
  appdir: process.cwd(),

  /**
   * version
   *
   * @type {string}
   */
  version: '0.0.0.0'

}
