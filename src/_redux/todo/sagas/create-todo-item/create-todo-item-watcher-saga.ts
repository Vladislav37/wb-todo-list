import { fork, take } from 'redux-saga/effects';
import { createTodoItemActionSaga } from '../../actions';
import { createTodoItemWorkerSaga } from './create-todo-item-worker-saga';

export const CREATE_TODO_ITEM_WATCHER_SAGA_NAME =
  'CREATE_TODO_ITEM_WATCHER_SAGA_NAME';

export function* createTodoItemWatcherSaga() {
  while (true) {
    const { payload }: ReturnType<typeof createTodoItemActionSaga> = yield take(
      createTodoItemActionSaga.type,
    );
    yield fork(createTodoItemWorkerSaga, payload);
  }
}
