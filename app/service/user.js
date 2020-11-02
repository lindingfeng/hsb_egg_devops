'use strict'
const jwt = require('jsonwebtoken')

const Service = require('egg').Service

class UserService extends Service {
  async login({ phone, password }) {
    const { ctx } = this
    return new Promise(async (resolve, reject) => {
      try {
        const users = await ctx.model.User.find({ phone })
        const [ info ] = users
        if (info) {
          // 密码正确
          if (password === info.password) {
            const token = jwt.sign({
              uid: info._id
            }, 'lindingfeng', { expiresIn: 2592000 })
            resolve(token)
          } else {
            reject({ message: '登录密码错误' })
          }
        } else {
          // 注册
          const token = await ctx.service.user.register({ phone, password })
          resolve(token)
        }
      } catch (error) {
        reject(error)
      }
    })
  }
  async register({ phone, password }) {
    const { ctx } = this
    return new Promise(async (resolve, reject) => {
      try {
        const ret = await ctx.model.User.create({ phone, password })
        if (ret && ret._id) {
          const token = jwt.sign({
            uid: ret._id
          }, 'lindingfeng', { expiresIn: 2592000 })
          resolve(token)
        }
      } catch (error) {
        reject(error)
      }
    })
  }
  async getUserInfo() {
    const { ctx } = this
    return new Promise(async (resolve, reject) => {
      try {
        const [ ret ] = await ctx.model.User.find({ _id: ctx.query.uid })
        if (ret && ret.phone) {
          resolve(ret.phone)
        } else {
          reject({ message: '获取用户信息失败' })
        }
      } catch (error) {
        reject(error)
      }
    })
  }
}

module.exports = UserService
