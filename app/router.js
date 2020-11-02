'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  router.get('/api/getCategory', middleware.verifyToken(), controller.category.getCategory);
  router.get('/api/getAppList', middleware.verifyToken(), controller.application.getAppList);
  router.get('/api/getAppListByKey', controller.application.getAppList);
  router.post('/api/createApp', middleware.verifyToken(), controller.application.createApp);
  router.post('/api/updateApp', middleware.verifyToken(), controller.application.updateApp);
  router.post('/api/deleteApp', middleware.verifyToken(), controller.application.deleteApp);
  router.post('/api/login', controller.user.login);
  router.get('/api/getUserInfo', middleware.verifyToken(), controller.user.getUserInfo);
  router.get('/api/checkLoginStatus', controller.common.checkLoginStatus);
};
