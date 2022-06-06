import { InitLoadManagerRequestOptionsType } from '@mihanizm56/redux-core-modules';
import i18next from 'i18next';
import {
  setInitialTodoListAction,
  setTodoListAction,
  startCardInfoLoadingAction,
  stopCardInfoLoadingAction,
} from '@/_redux/todo/actions';
import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';
import { getTodoListRequest } from '@/api/requests/todo/get-todo-list';
import { PAGE_SUB_NAMESPACE } from '../../_constants/translations/page-sub-namespace';

export const fetchTodoConfig = (
  withoutLoader = false,
): InitLoadManagerRequestOptionsType => {
  const configObjectWithoutLoader = {
    request: getTodoListRequest,
    actionSuccess: setTodoListAction,
    errorAction: setInitialTodoListAction,
    showErrorNotification: true,
    titleMessageError: i18next.t(
      `${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.errors.title`,
    ),
  };

  return withoutLoader
    ? configObjectWithoutLoader
    : {
        ...configObjectWithoutLoader,
        loadingStartAction: startCardInfoLoadingAction,
        loadingStopAction: stopCardInfoLoadingAction,
      };
};
