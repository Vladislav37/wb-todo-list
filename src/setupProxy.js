// eslint-disable-next-line
const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api/v1',
    proxy({
      target: 'http://127.0.0.1:8080',
      changeOrigin: true,
    }),
  );

  app.use(
    '/I18N',
    proxy({
      // target: 'http://i18n.suppliers-portal-ru.svc.k8s.stage-dp',
      target: 'http://localhost:8081',
      changeOrigin: true,
    }),
  );
};
