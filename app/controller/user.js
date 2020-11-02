'use strict';
const { returnRepData } = require('../../utils')

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login () {
    const { ctx } = this;
    const { phone, password } = ctx.request.body
    if (!phone || !password) {
      ctx.body = returnRepData({ code: 1, msg: '手机号和密码不能为空' })
      return
    }
    if (!/^1\d{10}$/.test(phone)) {
      ctx.body = returnRepData({ code: 1, msg: '手机号格式不正确' })
      return
    }
    try {
      const token = await ctx.service.user.login({ phone, password })
      ctx.body = returnRepData({ data: { token } })
    } catch (error) {
      ctx.body = returnRepData({ code: 1, msg: error.message || '请求失败' })
    }
  }
  async getUserInfo () {
    const { ctx } = this;
    try {
      const phone = await ctx.service.user.getUserInfo()
      ctx.body = returnRepData({ data: { phone } })
    } catch (error) {
      ctx.body = returnRepData({ code: 1, msg: error.message || '请求失败' })
    }
  }
}

module.exports = UserController;
