import { REDUCER_TODOLIST_NAME } from './constants';
import { initialState } from './reducer';
import { TodoInitialState, TodoType } from './types';

export const todoListStorageSelector = (store: TodoInitialState) =>
  store[REDUCER_TODOLIST_NAME] || initialState;

export const getCurrentTodoList = (
  store: TodoInitialState,
): Array<TodoType> => {
  return store[REDUCER_TODOLIST_NAME].todos;
};
