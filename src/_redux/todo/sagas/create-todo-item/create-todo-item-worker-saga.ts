import { setModalAction } from '@wildberries/notifications';
import { call, put, select } from 'redux-saga/effects';
import { initLoadManagerActionSaga } from '@mihanizm56/redux-core-modules';
import { IResponse } from '@mihanizm56/fetch-api';
import { createTodoItemRequest } from '@/api/requests/todo';
import { fetchTodoConfig } from '@/pages/todo-list/store-inject-config/_utils/fetch-todo-config';
import { TodoType } from '../../_types';
import { todoListSelector } from '../../selectors';
import { fetchTodoListAction } from '../../actions';
import { updateIsLoadingStateForTodoList } from '../../_utils';

export function* createTodoItemWorkerSaga(item: TodoType) {
  try {
    const allTodos = yield select(todoListSelector);
    const updatedTodos = updateIsLoadingStateForTodoList(
      allTodos,
      item.id,
      true,
    );

    yield put(fetchTodoListAction(updatedTodos));

    const { error, errorText }: IResponse = yield call(
      createTodoItemRequest,
      item,
    );

    if (error) {
      throw new Error(errorText);
    }

    yield put(
      initLoadManagerActionSaga({
        requestConfigList: [fetchTodoConfig],
      }),
    );
  } catch (error) {
    console.error('Error in createTodoItemWorkerSaga', error.message);

    yield put(
      setModalAction({
        status: 'error',
        title: 'Error request!',
        text: error.message,
      }),
    );
  } finally {
    const allTodos = yield select(todoListSelector);
    const updatedTodos = updateIsLoadingStateForTodoList(
      allTodos,
      item.id,
      false,
    );

    yield put(fetchTodoListAction(updatedTodos));
  }
}
