import { initLoadManagerActionSaga } from '@mihanizm56/redux-core-modules';
import { setModalAction } from '@wildberries/notifications';
import { call, put } from 'redux-saga/effects';
import { fetchTodoConfig } from '@/pages/todo-list/store-inject-config/_utils/fetch-todo-config';
import { updateTodoItemRequest } from '@/api/requests/todo';

export function* updateTodoItemWorkerSaga(item) {
  try {
    const { error, errorText } = yield call(updateTodoItemRequest, item);

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
        status: 'error',
        text: error.message,
      }),
    );
  }
}
