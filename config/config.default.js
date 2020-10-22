/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1603176786301_7209';

  // add your middleware config here
  config.middleware = [];

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017',
      options: {
        user: 'jk_devops_admin', // 数据库用户名
        pass: 'wsjj1994',     // 数据库密码
        dbName: 'jk_devops'    // 数据库名
      }
    }
  }

  /*
    * @desc: 配置egg-cors的options
    * @doc: https://github.com/eggjs/egg-cors
  */
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ['*']
  }
  config.cors = {
    origin: '*',
    // allowHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  }

  /*
    * @desc: 配置egg-validate的options
    * @npm: https://www.npmjs.com/package/parameter
    * @gitHub: https://github.com/eggjs/egg-validate
  */
 config.validate = {
    // 重要：可将入参尽可能转为type指定的类型
    convert: true,
    /*
      * 重要：入参类型为int时，将空字符串，NaN，Null转换为未定义
      * 场景：入参类型为int时，客户端传参为空字符串，NaN，Null
    */
    // widelyUndefined: true,
  }

  // add your user config here
  const userConfig = {
    // ...
  };

  return {
    ...config,
    ...userConfig
  };
};

// exports.mongoose = {
//   clients: {
//     url: 'mongodb://127.0.0.1:27017',
//     options: {
//       user: 'account_user', // 数据库用户名
//       pass: 'wsjj1994',     // 数据库密码
//       dbName: 'account'    // 数据库名
//     }
//   }
// };
