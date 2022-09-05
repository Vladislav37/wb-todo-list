import { setModalAction } from '@wildberries/notifications';
import i18next from 'i18next';
import { PAGE_SUB_NAMESPACE } from '@/pages/todo-list/_constants/translations/page-sub-namespace';
import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';

export const callSuccesNotification = (): ReturnType<typeof setModalAction> => {
  return setModalAction({
    status: 'success',
    title: i18next.t(`${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.success.title`),
    text: i18next.t(`${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.success.text`),
    customHoldTimeout: 10000,
  });
};
