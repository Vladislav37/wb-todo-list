import { IReduxAction } from '@mihanizm56/redux-core-modules';
import { TodoType } from './types';

export const FETCH_TODOLIST_ACTION = 'FETCH_TODOLIST_ACTION';
export const fetchTodoListAction: IReduxAction<
  TodoType,
  typeof FETCH_TODOLIST_ACTION
> = (payload) => ({
  type: FETCH_TODOLIST_ACTION,
  payload,
});
fetchTodoListAction.type = FETCH_TODOLIST_ACTION;

export const CREATE_TODO_ITEM_ACTION = 'CREATE_TODO_ITEM_ACTION';
export const createTodoItemAction: IReduxAction<
  TodoType,
  typeof CREATE_TODO_ITEM_ACTION
> = (payload) => ({
  type: CREATE_TODO_ITEM_ACTION,
  payload,
});
createTodoItemAction.type = CREATE_TODO_ITEM_ACTION;

export const UPDATE_TODO_ITEM = 'UPDATE_TODO_ITEM';
export const updateTodoItemAction: IReduxAction<
  TodoType,
  typeof UPDATE_TODO_ITEM
> = (payload) => ({
  type: UPDATE_TODO_ITEM,
  payload,
});
updateTodoItemAction.type = UPDATE_TODO_ITEM;

export const DELETE_TODO_ITEM_ACTION = 'DELETE_TODO_ITEM_ACTION';
export const deleteTodoItemAction: IReduxAction<
  TodoType,
  typeof DELETE_TODO_ITEM_ACTION
> = (payload) => ({
  type: DELETE_TODO_ITEM_ACTION,
  payload,
});
deleteTodoItemAction.type = DELETE_TODO_ITEM_ACTION;
