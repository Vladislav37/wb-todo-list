import { setModalAction } from '@wildberries/notifications';
import { call, put, select } from 'redux-saga/effects';
import { initLoadManagerActionSaga } from '@mihanizm56/redux-core-modules';
import { deleteTodoItemRequest } from '@/api/requests/todo';
import { fetchTodoConfig } from '@/pages/todo-list/store-inject-config/_utils/fetch-todo-config';
import { TodoType } from '../../types';
import { getCurrentTodoList } from '../../selectors';
import { setTodoItemLoadingAction } from '../../actions';
import { updateIsLoadingStateForTodoList } from '../../_utils';

export function* deleteTodoItemWorkerSaga(item: TodoType) {
  try {
    const allTodos = yield select(getCurrentTodoList);
    yield put(
      setTodoItemLoadingAction(
        updateIsLoadingStateForTodoList(allTodos, item.id, true),
      ),
    );

    const { error, errorText } = yield call(deleteTodoItemRequest, item);

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
  } finally {
    const allTodos = yield select(getCurrentTodoList);
    yield put(
      setTodoItemLoadingAction(
        updateIsLoadingStateForTodoList(allTodos, item.id, false),
      ),
    );
  }
}
