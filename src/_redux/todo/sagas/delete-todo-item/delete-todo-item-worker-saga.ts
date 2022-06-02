import { setModalAction } from '@wildberries/notifications';
import { call, put, select } from 'redux-saga/effects';
import { initLoadManagerActionSaga } from '@mihanizm56/redux-core-modules';
import i18next from 'i18next';
import { deleteTodoItemRequest } from '@/api/requests/todo';
import { fetchTodoConfig } from '@/pages/todo-list/store-inject-config/_utils/fetch-todo-config';
import { updateIsDeletingStateForTodoList } from '@/_utils/todo';
import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';
import { PAGE_SUB_NAMESPACE } from '@/pages/todo-list/_constants/translations/page-sub-namespace';
import { todoListSelector } from '../../selectors';
import { setUpdatedTodoItem } from '../../actions';

export function* deleteTodoItemWorkerSaga(id: string) {
  try {
    const allTodos = yield select(todoListSelector);
    const updatedLoadingTodos = updateIsDeletingStateForTodoList({
      items: allTodos,
      currentId: id,
      isDeleting: true,
    });

    yield put(setUpdatedTodoItem(updatedLoadingTodos));

    const { error, errorText } = yield call(deleteTodoItemRequest, id);

    if (error) {
      throw new Error(errorText);
    }

    yield put(
      initLoadManagerActionSaga({
        requestConfigList: [fetchTodoConfig],
      }),
    );
  } catch (error) {
    console.error('Error in deleteTodoItemWorkerSaga', error.message);

    yield put(
      setModalAction({
        status: i18next.t(
          `${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.errors.status`,
        ),
        title: i18next.t(
          `${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.errors.delete`,
        ),
        text: error.message,
        customHoldTimeout: 10000,
      }),
    );
  } finally {
    const allTodos = yield select(todoListSelector);
    const updatedLoadingTodos = updateIsDeletingStateForTodoList({
      items: allTodos,
      currentId: id,
      isDeleting: false,
    });

    yield put(setUpdatedTodoItem(updatedLoadingTodos));
  }
}
