import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';

export default {
  name: 'todo',
  path: '/todo',
  loadAction: () => import('./index'),
  i18n: {
    namespaces: [APP_NAMESPACE],
  },
};
