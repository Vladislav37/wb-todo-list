import { setModalAction } from '@wildberries/notifications';
import { call, put } from 'redux-saga/effects';
import { initLoadManagerActionSaga } from '@mihanizm56/redux-core-modules';
import { IResponse } from '@mihanizm56/fetch-api';
import i18next from 'i18next';
import { createTodoItemRequest } from '@/api/requests/todo';
import { fetchTodoConfig } from '@/pages/todo-list/store-inject-config/_utils/fetch-todo-config';
import { TodoType } from '@/pages/todo-list/_types';
import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';
import { PAGE_SUB_NAMESPACE } from '@/pages/todo-list/_constants/translations/page-sub-namespace';
import {
  showFormForNewTaskActionSaga,
  startCreatingNewTaskAction,
  stopCreatingNewTaskAction,
} from '../../actions';

export function* createTodoItemWorkerSaga(item: TodoType) {
  try {
    yield put(startCreatingNewTaskAction());

    const { error, errorText }: IResponse = yield call(
      createTodoItemRequest,
      item,
    );

    if (error) {
      throw new Error(errorText);
    }

    yield put(showFormForNewTaskActionSaga(false));

    yield put(
      initLoadManagerActionSaga({
        requestConfigList: [fetchTodoConfig],
      }),
    );
  } catch (error) {
    console.error('Error in createTodoItemWorkerSaga', error.message);

    yield put(
      setModalAction({
        status: i18next.t(
          `${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.errors.status`,
        ),
        title: i18next.t(
          `${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.errors.create`,
        ),
        text: error.message,
        customHoldTimeout: 10000,
      }),
    );
  } finally {
    yield put(stopCreatingNewTaskAction());
  }
}
