'use strict';
const { returnRepData } = require('../../utils')

const Controller = require('egg').Controller;

class ApplicationController extends Controller {
  async getAppList () {
    const { ctx } = this;
    const { app_type, app_key } = ctx.query
    try {
      const ret = await ctx.service.application.getAppList({ app_type, app_key })
      ctx.body = returnRepData({ data: { list: ret } })
    } catch (error) {
      ctx.body = ctx.body = returnRepData({ code: 1, msg: error.message || '请求失败' })
    }
  }
  async createApp () {
    const { ctx } = this;
    const params = ctx.request.body
    try {
      await ctx.service.application.createApp(params)
      ctx.body = returnRepData({})
    } catch (error) {
      ctx.body = returnRepData({ code: 1, msg: error.message || '请求失败' })
    }
  }
  async updateApp () {
    const { ctx } = this;
    const params = ctx.request.body
    try {
      await ctx.service.application.updateApp(params)
      ctx.body = returnRepData({})
    } catch (error) {
      ctx.body = returnRepData({ code: 1, msg: error.message || '请求失败' })
    }
  }
  async deleteApp () {
    const { ctx } = this;
    const params = ctx.request.body
    try {
      await ctx.service.application.deleteApp(params)
      ctx.body = returnRepData({})
    } catch (error) {
      ctx.body = returnRepData({ code: 1, msg: error.message || '请求失败' })
    }
  }
}

module.exports = ApplicationController;
