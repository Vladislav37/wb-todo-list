import { setModalAction } from '@wildberries/notifications';
import { call, put } from 'redux-saga/effects';
import { initLoadManagerActionSaga } from '@mihanizm56/redux-core-modules';
import { createTodoItemRequest } from '@/api/requests/todo';
import { fetchTodoConfig } from '@/pages/todo-list/store-inject-config/_utils/fetch-todo-config';
import { TodoType } from '../../types';

export function* createTodoItemWorkerSaga(item: TodoType) {
  try {
    const { error, errorText } = yield call(createTodoItemRequest, item);

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
        text: error.message,
      }),
    );
  }
}
