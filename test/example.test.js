/**
 * @file example test
 * @author sekiyika(pengxing@baidu.com)
 */

/* global describe, it */

const assert = require('assert')
const supertest = require('supertest')

describe('example', function () {
  const request = supertest('http://127.0.0.1:8079')

  it('test', function () {
    assert.equal(1, Math.abs(-1))
    assert.equal(0, Math.abs(-0))
  })

  // 测试 API User 是否正确
  it('get user', function (done) {
    request.get('/api/user')
      .expect('Content-Type', 'text/javascript; charset=UTF-8')
      .expect('Access-Control-Allow-Origin', '*')
      .expect(200)
      .end(function (err, res) {
        assert.ifError(err)
        let text = res.text
        let data = JSON.parse(text)

        assert.equal(0, data.status)
        assert.equal('sekiyika', data.data.name)
        done()
      })
  })
})
