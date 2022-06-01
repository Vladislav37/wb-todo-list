import { IReduxAction, IReduxBaseAction } from '@mihanizm56/redux-core-modules';
import { TodoType } from '@/pages/todo-list/_types';
import { TodoStorageType } from './_types';

export const FETCH_TODOLIST = 'FETCH_TODOLIST';
export const fetchTodoListAction: IReduxAction<
  TodoStorageType[],
  typeof FETCH_TODOLIST
> = (payload) => ({
  type: FETCH_TODOLIST,
  payload,
});
fetchTodoListAction.type = FETCH_TODOLIST;

export const SET_UPDATED_TODO_ITEM = 'SET_UPDATED_TODO_ITEM';
export const setUpdatedTodoItem: IReduxAction<
  TodoType[],
  typeof SET_UPDATED_TODO_ITEM
> = (payload) => ({
  type: SET_UPDATED_TODO_ITEM,
  payload,
});
setUpdatedTodoItem.type = SET_UPDATED_TODO_ITEM;

export const CREATE_TODO_ITEM = 'CREATE_TODO_ITEM';
export const createTodoItemAction: IReduxAction<
  TodoType,
  typeof CREATE_TODO_ITEM
> = (payload) => ({
  type: CREATE_TODO_ITEM,
  payload,
});
createTodoItemAction.type = CREATE_TODO_ITEM;

export const UPDATE_TODO_ITEM = 'UPDATE_TODO_ITEM';
export const updateTodoItemAction: IReduxAction<
  TodoType,
  typeof UPDATE_TODO_ITEM
> = (payload) => ({
  type: UPDATE_TODO_ITEM,
  payload,
});
updateTodoItemAction.type = UPDATE_TODO_ITEM;

export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';
export const deleteTodoItemAction: IReduxAction<
  string,
  typeof DELETE_TODO_ITEM
> = (payload) => ({
  type: DELETE_TODO_ITEM,
  payload,
});
deleteTodoItemAction.type = DELETE_TODO_ITEM;

export const START_LOADING = 'START_LOADING';
export const startCardInfoLoadingAction: IReduxBaseAction<
  typeof START_LOADING
> = () => ({
  type: START_LOADING,
});
startCardInfoLoadingAction.type = START_LOADING;

export const STOP_LOADING = 'STOP_LOADING';
export const stopCardInfoLoadingAction: IReduxBaseAction<typeof STOP_LOADING> =
  () => ({
    type: STOP_LOADING,
  });
stopCardInfoLoadingAction.type = STOP_LOADING;

export const START_CREATING = 'START_CREATING';
export const startCreatingNewTaskAction: IReduxBaseAction<
  typeof START_CREATING
> = () => ({
  type: START_CREATING,
});
startCreatingNewTaskAction.type = START_CREATING;

export const STOP_CREATING = 'STOP_CREATING';
export const stopCreatingNewTaskAction: IReduxBaseAction<typeof STOP_CREATING> =
  () => ({
    type: STOP_CREATING,
  });
stopCreatingNewTaskAction.type = STOP_CREATING;

export const SHOW_FORM_FOR_NEW_TASK = 'SHOW_FORM_FOR_NEW_TASK';
export const showFormForNewTaskAction: IReduxAction<
  boolean,
  typeof SHOW_FORM_FOR_NEW_TASK
> = (payload) => ({
  type: SHOW_FORM_FOR_NEW_TASK,
  payload,
});
showFormForNewTaskAction.type = SHOW_FORM_FOR_NEW_TASK;
