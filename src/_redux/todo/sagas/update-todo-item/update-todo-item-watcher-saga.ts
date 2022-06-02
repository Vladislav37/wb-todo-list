import { fork, take } from 'redux-saga/effects';
import { updateTodoItemActionSaga } from '../../actions';
import { updateTodoItemWorkerSaga } from './update-todo-item-worker-saga';

export const UPDATE_TODO_ITEM_WATCHER_SAGA_NAME =
  'UPDATE_TODO_ITEM_WATCHER_SAGA_NAME';

export function* updateTodoItemWatcherSaga() {
  while (true) {
    const { payload }: ReturnType<typeof updateTodoItemActionSaga> = yield take(
      updateTodoItemActionSaga.type,
    );
    yield fork(updateTodoItemWorkerSaga, payload);
  }
}
