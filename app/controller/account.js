'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async getUserList () {
    const { ctx } = this;
    try {
      ctx.body = await ctx.service.account.getInfoList()
    } catch (error) {
      ctx.body = error
    }
  }
}

module.exports = HomeController;
