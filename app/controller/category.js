'use strict';
const { returnRepData } = require('../../utils')

const Controller = require('egg').Controller;

class CategoryController extends Controller {
  async getCategory () {
    const { ctx } = this
    try {
      const ret = await ctx.service.category.getCategory()
      ctx.body = returnRepData({ data: { list: ret } })
    } catch (error) {
      ctx.body = returnRepData({ code: 1, msg: error.message || '请求失败' })
    }
  }
}

module.exports = CategoryController;
