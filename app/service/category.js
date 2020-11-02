'use strict'

const Service = require('egg').Service

class CategoryService extends Service {
  /*
   * @desc: 获取信息列表
  */
  async getCategory() {
    const { ctx } = this;
    return new Promise((resolve, reject) => {
      ctx.model.Category.find({}, (err, res) => {
        if (err) {
          return reject(err)
        }
        resolve(res)
      })
    })
  }
}

module.exports = CategoryService
