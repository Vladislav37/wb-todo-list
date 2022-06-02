import { fork, take } from 'redux-saga/effects';
import { deleteTodoItemActionSaga } from '../../actions';
import { deleteTodoItemWorkerSaga } from './delete-todo-item-worker-saga';

export const DELETE_TODO_ITEM_WATCHER_SAGA_NAME =
  'DELETE_TODO_ITEM_WATCHER_SAGA_NAME';

export function* deleteTodoItemWatcherSaga() {
  while (true) {
    const { payload }: ReturnType<typeof deleteTodoItemActionSaga> = yield take(
      deleteTodoItemActionSaga.type,
    );
    yield fork(deleteTodoItemWorkerSaga, payload);
  }
}
