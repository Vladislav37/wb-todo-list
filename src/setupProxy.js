// eslint-disable-next-line
const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/tasks',
    proxy({
      target: 'http://localhost:8081',
      changeOrigin: true,
    }),
  );

  app.use(
    '/I18N',
    proxy({
      target: 'http://localhost:8081',
      changeOrigin: true,
    }),
  );
};
