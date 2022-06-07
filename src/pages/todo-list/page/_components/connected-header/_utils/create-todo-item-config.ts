import { initLoadManagerActionSaga } from '@mihanizm56/redux-core-modules';
import i18next from 'i18next';
import { createTodoItemRequest } from '@/api/requests/todo/create-todo-item';
import { fetchTodoConfig } from '@/pages/todo-list/store-inject-config/_utils/fetch-todo-config';
import { PAGE_SUB_NAMESPACE } from '@/pages/todo-list/_constants/translations/page-sub-namespace';
import { TodoType } from '@/pages/todo-list/_types';
import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';
import {
  resetNewTaskFormInitialValuesAction,
  setNewTaskFormInitialValuesAction,
  showFormForNewTaskAction,
  startCreatingNewTaskAction,
  stopCreatingNewTaskAction,
} from '@/_redux/todo';

export const createTodoItemConfig = (values: TodoType) => {
  return {
    resetInitialDataAction: () => setNewTaskFormInitialValuesAction(values),
    formRequest: ({ body }) => createTodoItemRequest(body),
    formValues: values,
    showNotification: true,
    loadingStartAction: startCreatingNewTaskAction,
    loadingStopAction: stopCreatingNewTaskAction,
    formSuccessActionsArray: [
      () => showFormForNewTaskAction(false),
      () =>
        initLoadManagerActionSaga({
          requestConfigList: [fetchTodoConfig(true)],
        }),
      resetNewTaskFormInitialValuesAction,
    ],
    titleMessageSuccess: i18next.t(
      `${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.success.title`,
    ),
    textMessageSuccess: i18next.t(
      `${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.success.text`,
    ),
    titleMessageError: i18next.t(
      `${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.errors.title`,
    ),
  };
};
