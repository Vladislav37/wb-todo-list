import { initLoadManagerActionSaga } from '@mihanizm56/redux-core-modules';
import { setModalAction } from '@wildberries/notifications';
import { call, put, select } from 'redux-saga/effects';
import i18next from 'i18next';
import { fetchTodoConfig } from '@/pages/todo-list/store-inject-config/_utils/fetch-todo-config';
import { updateTodoItemRequest } from '@/api/requests/todo';
import { TodoType } from '@/pages/todo-list/_types';
import {
  updateIsEditableStateForTodoList,
  updateIsLoadingStateForTodoList,
} from '@/_utils/todo';
import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';
import { PAGE_SUB_NAMESPACE } from '@/pages/todo-list/_constants/translations/page-sub-namespace';
import { todoListSelector } from '../../selectors';
import { setUpdatedTodoItemAction } from '../../actions';

export function* updateTodoItemWorkerSaga(item: TodoType) {
  try {
    const allTodos = yield select(todoListSelector);
    const updatedLoadingTodos = updateIsLoadingStateForTodoList({
      items: allTodos,
      currentId: item.id,
      isLoading: true,
    });

    yield put(setUpdatedTodoItemAction(updatedLoadingTodos));

    const { error, errorText } = yield call(updateTodoItemRequest, item);

    if (error) {
      throw new Error(errorText);
    }

    const allAfterUpdateTodos = yield select(todoListSelector);
    const updatedEditableTodos = updateIsEditableStateForTodoList({
      items: allAfterUpdateTodos,
      currentId: item.id,
      isEditable: false,
    });

    yield put(setUpdatedTodoItemAction(updatedEditableTodos));

    yield put(
      initLoadManagerActionSaga({
        requestConfigList: [fetchTodoConfig],
      }),
    );
  } catch (error) {
    console.error('Error in updateTodoItemWorkerSaga', error.message);

    yield put(
      setModalAction({
        status: i18next.t(
          `${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.errors.status`,
        ),
        title: i18next.t(
          `${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.errors.update`,
        ),
        text: error.message,
        customHoldTimeout: 10000,
      }),
    );
  } finally {
    const allTodos = yield select(todoListSelector);
    const updatedLoadingTodos = updateIsLoadingStateForTodoList({
      items: allTodos,
      currentId: item.id,
      isLoading: false,
    });

    yield put(setUpdatedTodoItemAction(updatedLoadingTodos));
  }
}
