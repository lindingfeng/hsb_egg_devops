'use strict'
const dayjs = require('dayjs');
const { randomWord } = require('../../utils')

const Service = require('egg').Service

class ApplicationService extends Service {
  async getAppList({ app_type, app_key }) {
    const { ctx } = this
    const filterParams = {
      uid: ctx.query.uid
    }
    app_type && (filterParams.app_type = app_type)
    app_key && (filterParams.app_key = app_key)
    return new Promise((resolve, reject) => {
      ctx.model.Application.find(filterParams, { __v: 0 }, (err, res) => {
        if (err) {
          return reject(err)
        }
        resolve(res)
      }).sort({ _id: -1 })
    })
  }
  async createApp(params) {
    const { ctx } = this
    return new Promise(async (resolve, reject) => {
      try {
        const user = await ctx.model.User.find({ _id: ctx.query.uid})
        const [ info ] = user
        const app_key = randomWord(false, 8, 8)
        await ctx.model.Application.create({
          ...params,
          uid: info._id,
          app_key,
          create_user: info.phone,
          create_time: dayjs().format('YYYY-MM-DD HH:mm:ss')
        })
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }
  async updateApp(params) {
    const { ctx } = this
    const app_id = params
    delete params.app_id
    return new Promise(async (resolve, reject) => {
      try {
        const user = await ctx.model.User.find({ _id: ctx.query.uid})
        const [ info ] = user
        const ret = await ctx.model.Application.update({ _id: app_id, uid: info._id }, {
          ...params
        })
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }
  async deleteApp({ app_id }) {
    const { ctx } = this
    if (!app_id) {
      reject({ message: '删除失败，缺少参数' })
    }
    return new Promise(async (resolve, reject) => {
      try {
        const [ appInfo ] = await ctx.model.Application.find({ _id: app_id, uid: ctx.query.uid })
        if (appInfo) {
          const ret = await ctx.model.Application.remove({ _id: app_id })
          if (ret && ret.deletedCount > 0) {
            resolve()
          } else {
            reject({ message: '删除失败' })
          }
        } else {
          reject({ message: '删除失败' })
        }
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = ApplicationService
