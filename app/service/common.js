'use strict'

const Service = require('egg').Service

class CommonService extends Service {
  /*
   * @desc: 获取信息列表
  */
  async loginByAMC({ amc_user, amc_pass }) {
    return new Promise(async (resolve, reject) => {
      const config = this.config.conf
      try {
        const res = await this.ctx.curl(config.AMC_LOGIN_HOST, {
          method: 'POST',
          data: {
            username: amc_user,
            password: amc_pass,
            system_id: config.USER.SYSTEM_ID
          },
          dataType: 'json',
          headers: {
            ContentType: 'application/x-www-form-urlencoded',
            Host: config.AMC_API_HOST
          }
        });
        if (res.data.body.retcode !== '0') {
          return reject(res.data.body.retinfo || '登录失败！')
        }
        resolve(res.data.body.data)
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = CommonService
