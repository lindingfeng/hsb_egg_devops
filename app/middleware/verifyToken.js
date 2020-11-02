const jwt = require('jsonwebtoken')
const { returnRepData } = require('../../utils')

/*
 * @Description: 检验用户token有效性
 * @Author: lindingfeng
 * @Date: 2020-10-27 17:18:27
*/
module.exports = options => {
  return async (ctx, next) => {
    const { query, request } = ctx
    const token = query.token || request.body.token
    if (token) {
      try {
        let ret = await jwt.verify(token, 'lindingfeng')
        ctx.query.uid = ret.uid
        await next()
      } catch (err) {
        ctx.body = returnRepData({ code: '200000', msg: '登录态失效' })
      }
      return
    }
    ctx.body = returnRepData({ code: '200000', msg: '未登录' })
  }
}