import { StoreInjectConfig } from '@mihanizm56/redux-core-modules';
import todoReducer, {
  deleteTodoItemWatcherSaga,
  DELETE_TODO_ITEM_WATCHER_SAGA_NAME,
  REDUCER_TODOLIST_NAME,
  updateTodoItemWatcherSaga,
  UPDATE_TODO_ITEM_WATCHER_SAGA_NAME,
} from '@/_redux/todo';
import { fetchTodoConfig } from './_utils/fetch-todo-config';

export const storeInjectConfig: StoreInjectConfig = {
  reducersToInject: [
    {
      name: REDUCER_TODOLIST_NAME,
      reducer: todoReducer,
    },
  ],
  sagasToInject: [
    {
      name: UPDATE_TODO_ITEM_WATCHER_SAGA_NAME,
      saga: updateTodoItemWatcherSaga,
    },
    {
      name: DELETE_TODO_ITEM_WATCHER_SAGA_NAME,
      saga: deleteTodoItemWatcherSaga,
    },
  ],
  initialLoadManagerConfig: {
    requestConfigList: [fetchTodoConfig()],
  },
};
