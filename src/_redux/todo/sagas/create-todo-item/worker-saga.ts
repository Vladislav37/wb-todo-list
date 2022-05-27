import { setModalAction } from '@wildberries/notifications';
import { call, put, select } from 'redux-saga/effects';
import { initLoadManagerActionSaga } from '@mihanizm56/redux-core-modules';
import { IResponse } from '@mihanizm56/fetch-api';
import { createTodoItemRequest } from '@/api/requests/todo';
import { fetchTodoConfig } from '@/pages/todo-list/store-inject-config/_utils/fetch-todo-config';
import { TodoType } from '../../types';
import { getCurrentTodoList } from '../../selectors';
import { setTodoItemLoadingAction } from '../../actions';
import { updateIsLoadingStateForTodoList } from '../../_utils';

export function* createTodoItemWorkerSaga(item: TodoType) {
  try {
    const allTodos = yield select(getCurrentTodoList);
    yield put(
      // нельзя как параметр вызов функции - извлеки в переменную вызов updateIsLoadingStateForTodoList
      setTodoItemLoadingAction(
        updateIsLoadingStateForTodoList(allTodos, item.id, true),
      ),
    );

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
        text: error.message,
      }),
    );
  } finally {
    // отбиваем enter вызоз от объявления
    const allTodos = yield select(getCurrentTodoList);
    yield put(
      setTodoItemLoadingAction(
        updateIsLoadingStateForTodoList(allTodos, item.id, false),
      ),
    );
  }
}
