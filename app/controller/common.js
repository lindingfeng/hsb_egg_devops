'use strict';
const jwt = require('jsonwebtoken')
const { returnRepData } = require('../../utils')

const Controller = require('egg').Controller;

class CommonController extends Controller {
  async checkLoginStatus () {
    const { query, request } = this.ctx
    const token = query.token || request.body.token
    if (token) {
      try {
        await jwt.verify(token, 'lindingfeng')
        this.ctx.body = returnRepData({ data: { status: 1 } })
      } catch (err) {
        this.ctx.body = returnRepData({ data: { status: 2 } })
      }
      return
    }
    this.ctx.body = returnRepData({ data: { status: 2 } })
  }
}

module.exports = CommonController;
