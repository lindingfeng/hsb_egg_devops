'use strict'

const Service = require('egg').Service

class OrderService extends Service {
  /*
   * @desc: 获取信息列表
  */
  async getInfoList() {
    const { ctx } = this;
    return new Promise((resolve, reject) => {
      ctx.model.Account.find({}, { _id: 0 }, (err, res) => {
        if (err) {
          return reject(err)
        }
        resolve(res)
      })
    })
  }
}

module.exports = OrderService
