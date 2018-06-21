/**
 * @file sample.js
 * @author sekiyika(pengxing@baidu.com)
 */

module.exports = async (ctx) => {
  // use component 'redis'
  await ctx.app.redis.get('redis-key')

  ctx.body = await ctx.render(
    'sample',
    {
      name: ctx.params.name || 'world'
    }
  )
}
