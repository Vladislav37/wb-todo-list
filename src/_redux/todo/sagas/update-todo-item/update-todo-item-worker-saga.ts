import { initLoadManagerActionSaga } from '@mihanizm56/redux-core-modules';
import { setModalAction } from '@wildberries/notifications';
import { call, put, select } from 'redux-saga/effects';
import { fetchTodoConfig } from '@/pages/todo-list/store-inject-config/_utils/fetch-todo-config';
import { updateTodoItemRequest } from '@/api/requests/todo';
import { TodoType } from '../../_types';
import { updateIsLoadingStateForTodoList } from '../../_utils';
import { todoListSelector } from '../../selectors';
import { fetchTodoListAction } from '../../actions';

export function* updateTodoItemWorkerSaga(item: TodoType) {
  try {
    const allTodos = yield select(todoListSelector);
    const updatedTodos = updateIsLoadingStateForTodoList(
      allTodos,
      item.id,
      true,
    );

    yield put(fetchTodoListAction(updatedTodos));

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
    console.error('Error in updateTodoItemWorkerSaga', error.message);

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
