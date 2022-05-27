import { IReduxAction } from '@mihanizm56/redux-core-modules';
import { TodoType } from './types';

export const FETCH_TODOLIST_ACTION_TYPE = 'FETCH_TODOLIST_ACTION_TYPE';
export const fetchTodoListAction: IReduxAction<
  TodoType[],
  typeof FETCH_TODOLIST_ACTION_TYPE
> = (payload) => ({
  type: FETCH_TODOLIST_ACTION_TYPE,
  payload,
});
fetchTodoListAction.type = FETCH_TODOLIST_ACTION_TYPE;

export const CREATE_TODO_ITEM_ACTION_TYPE = 'CREATE_TODO_ITEM_ACTION_TYPE';
export const createTodoItemAction: IReduxAction<
  TodoType,
  typeof CREATE_TODO_ITEM_ACTION_TYPE
> = (payload) => ({
  type: CREATE_TODO_ITEM_ACTION_TYPE,
  payload,
});
createTodoItemAction.type = CREATE_TODO_ITEM_ACTION_TYPE;

export const UPDATE_TODO_ITEM_ACTION_TYPE = 'UPDATE_TODO_ITEM_ACTION_TYPE';
export const updateTodoItemAction: IReduxAction<
  TodoType,
  typeof UPDATE_TODO_ITEM_ACTION_TYPE
> = (payload) => ({
  type: UPDATE_TODO_ITEM_ACTION_TYPE,
  payload,
});
updateTodoItemAction.type = UPDATE_TODO_ITEM_ACTION_TYPE;

export const DELETE_TODO_ITEM_ACTION_TYPE = 'DELETE_TODO_ITEM_ACTION_TYPE';
export const deleteTodoItemAction: IReduxAction<
  TodoType,
  typeof DELETE_TODO_ITEM_ACTION_TYPE
> = (payload) => ({
  type: DELETE_TODO_ITEM_ACTION_TYPE,
  payload,
});
deleteTodoItemAction.type = DELETE_TODO_ITEM_ACTION_TYPE;

export const SET_TODO_ITEM_LOADING_ACTION_TYPE =
  'SET_TODO_ITEM_LOADING_ACTION_TYPE';
export const setTodoItemLoadingAction: IReduxAction<
  TodoType[],
  typeof SET_TODO_ITEM_LOADING_ACTION_TYPE
> = (payload) => ({
  type: SET_TODO_ITEM_LOADING_ACTION_TYPE,
  payload,
});
setTodoItemLoadingAction.type = SET_TODO_ITEM_LOADING_ACTION_TYPE;
