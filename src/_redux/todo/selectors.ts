import { REDUCER_TODOLIST_NAME } from './constants';
import { initialState } from './reducer';

export const todoListStorageSelector = (store) =>
  store[REDUCER_TODOLIST_NAME] || initialState;
