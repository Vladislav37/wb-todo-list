import { InitLoadManagerRequestOptionsType } from '@mihanizm56/redux-core-modules';
import i18next from 'i18next';
import { getTodoListRequest } from '@/api/requests/todo';
import {
  fetchTodoListAction,
  startCardInfoLoadingAction,
  stopCardInfoLoadingAction,
} from '@/_redux/todo/actions';
import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';
import { PAGE_SUB_NAMESPACE } from '../../_constants/translations/page-sub-namespace';

export const fetchTodoConfig: InitLoadManagerRequestOptionsType = {
  request: getTodoListRequest,
  actionSuccess: fetchTodoListAction,
  errorAction: fetchTodoListAction,
  loadingStartAction: startCardInfoLoadingAction,
  loadingStopAction: stopCardInfoLoadingAction,
  showErrorNotification: true,
  showSuccessNotification: true,
  titleMessageSuccess: i18next.t(
    `${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.success.title`,
  ),
  textMessageSuccess: i18next.t(
    `${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.success.text`,
  ),
  // надо еще title message error
};
