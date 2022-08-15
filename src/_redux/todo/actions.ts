import { IReduxAction, IReduxBaseAction } from '@mihanizm56/redux-core-modules';
import { TodoType } from '@/pages/todo-list/_types';

const SET_TODO_LIST = 'SET_TODO_LIST';
export const setTodoListAction: IReduxAction<
  Array<TodoType>,
  typeof SET_TODO_LIST
> = (payload) => ({
  type: SET_TODO_LIST,
  payload,
});
setTodoListAction.type = SET_TODO_LIST;

const SET_INITIAL_TODOLIST = 'SET_INITIAL_TODOLIST';
export const setInitialTodoListAction: IReduxBaseAction<
  typeof SET_INITIAL_TODOLIST
> = () => ({
  type: SET_INITIAL_TODOLIST,
});
setInitialTodoListAction.type = SET_INITIAL_TODOLIST;

const CREATE_TODO_ITEM = 'CREATE_TODO_ITEM';
export const createTodoItemActionSaga: IReduxAction<
  TodoType,
  typeof CREATE_TODO_ITEM
> = (payload) => ({
  type: CREATE_TODO_ITEM,
  payload,
});
createTodoItemActionSaga.type = CREATE_TODO_ITEM;

const UPDATE_TODO_ITEM = 'UPDATE_TODO_ITEM';
export const updateTodoItemActionSaga: IReduxAction<
  TodoType,
  typeof UPDATE_TODO_ITEM
> = (payload) => ({
  type: UPDATE_TODO_ITEM,
  payload,
});
updateTodoItemActionSaga.type = UPDATE_TODO_ITEM;

const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';
export const deleteTodoItemActionSaga: IReduxAction<
  string,
  typeof DELETE_TODO_ITEM
> = (payload) => ({
  type: DELETE_TODO_ITEM,
  payload,
});
deleteTodoItemActionSaga.type = DELETE_TODO_ITEM;

const START_LOADING = 'START_LOADING';
export const startCardInfoLoadingAction: IReduxBaseAction<
  typeof START_LOADING
> = () => ({
  type: START_LOADING,
});
startCardInfoLoadingAction.type = START_LOADING;

const STOP_LOADING = 'STOP_LOADING';
export const stopCardInfoLoadingAction: IReduxBaseAction<typeof STOP_LOADING> =
  () => ({
    type: STOP_LOADING,
  });
stopCardInfoLoadingAction.type = STOP_LOADING;

const START_CREATING = 'START_CREATING';
export const startCreatingNewTaskAction: IReduxBaseAction<
  typeof START_CREATING
> = () => ({
  type: START_CREATING,
});
startCreatingNewTaskAction.type = START_CREATING;

const STOP_CREATING = 'STOP_CREATING';
export const stopCreatingNewTaskAction: IReduxBaseAction<typeof STOP_CREATING> =
  () => ({
    type: STOP_CREATING,
  });
stopCreatingNewTaskAction.type = STOP_CREATING;

const SHOW_FORM_FOR_NEW_TASK = 'SHOW_FORM_FOR_NEW_TASK';
export const showFormForNewTaskAction: IReduxAction<
  boolean,
  typeof SHOW_FORM_FOR_NEW_TASK
> = (payload) => ({
  type: SHOW_FORM_FOR_NEW_TASK,
  payload,
});
showFormForNewTaskAction.type = SHOW_FORM_FOR_NEW_TASK;

const RESET_INITIAL_VALUES = 'RESET_INITIAL_VALUES';
export const resetNewTaskFormInitialValuesAction: IReduxBaseAction<
  typeof RESET_INITIAL_VALUES
> = () => ({
  type: RESET_INITIAL_VALUES,
});
resetNewTaskFormInitialValuesAction.type = RESET_INITIAL_VALUES;

const SET_INITIAL_VALUES = 'SET_INITIAL_VALUES';
export const setNewTaskFormInitialValuesAction: IReduxAction<
  TodoType,
  typeof SET_INITIAL_VALUES
> = (payload) => ({
  type: SET_INITIAL_VALUES,
  payload,
});
setNewTaskFormInitialValuesAction.type = SET_INITIAL_VALUES;
