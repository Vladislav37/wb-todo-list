import { fork, take } from 'redux-saga/effects';
import { deleteTodoItemAction } from '../../actions';
import { deleteTodoItemWorkerSaga } from './worker-saga';

export const DELETE_TODO_ITEM_WATCHER_SAGA_NAME =
  'DELETE_TODO_ITEM_WATCHER_SAGA_NAME';

export function* deleteTodoItemWatcherSaga() {
  while (true) {
    const { payload }: ReturnType<typeof deleteTodoItemAction> = yield take(
      deleteTodoItemAction.type,
    );
    yield fork(deleteTodoItemWorkerSaga, payload);
  }
}
