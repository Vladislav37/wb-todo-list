import { setModalAction } from '@wildberries/notifications';
import { call, put, select } from 'redux-saga/effects';
import { initLoadManagerActionSaga } from '@mihanizm56/redux-core-modules';
import { deleteTodoItemRequest } from '@/api/requests/todo';
import { fetchTodoConfig } from '@/pages/todo-list/store-inject-config/_utils/fetch-todo-config';
import { todoListSelector } from '../../selectors';
import { fetchTodoListAction } from '../../actions';
import { updateIsLoadingStateForTodoList } from '../../_utils';
import { TodoType } from '../../_types';

export function* deleteTodoItemWorkerSaga({ id }: TodoType) {
  try {
    const allTodos = yield select(todoListSelector);
    const updatedTodos = updateIsLoadingStateForTodoList(allTodos, id, true);

    yield put(fetchTodoListAction(updatedTodos));

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
        status: 'error',
        title: 'Error request!',
        text: error.message,
      }),
    );
  } finally {
    const allTodos = yield select(todoListSelector);
    const updatedTodos = updateIsLoadingStateForTodoList(allTodos, id, false);

    yield put(fetchTodoListAction(updatedTodos));
  }
}
