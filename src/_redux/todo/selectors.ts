import { createSelector } from 'reselect';
import { REDUCER_TODOLIST_NAME } from './_constants';
import { initialState } from './reducer';
import { TodoStoragePartType, TodoStorageType } from './_types';

export const todoListStorageSelector = (store: TodoStoragePartType) => {
  return store[REDUCER_TODOLIST_NAME] || initialState;
};

export const todoListSelector = createSelector(
  [todoListStorageSelector],
  ({ data }: TodoStorageType) => data,
);

export const isLoadingTasksSelector = createSelector(
  [todoListStorageSelector],
  ({ isLoadingTasks }: TodoStorageType) => isLoadingTasks,
);
