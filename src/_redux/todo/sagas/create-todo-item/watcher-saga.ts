import { fork, take } from 'redux-saga/effects';
import { createTodoItemAction } from '../../actions';
import { createTodoItemWorkerSaga } from './worker-saga';

export const CREATE_TODO_ITEM_WATCHER_SAGA_NAME =
  'CREATE_TODO_ITEM_WATCHER_SAGA_NAME';

export function* createTodoItemWatcherSaga() {
  while (true) {
    const { payload }: ReturnType<typeof createTodoItemAction> = yield take(
      createTodoItemAction.type,
    );
    yield fork(createTodoItemWorkerSaga, payload);
  }
}
