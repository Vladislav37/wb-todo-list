import { REDUCER_TODOLIST_NAME } from './constants';

export type TodoType = {
  id?: string;
  name?: string;
  description?: string;
  isLoading?: boolean;
};

export type TodoInitialState = {
  todos: TodoType[];
};

export type TodoStoragePartType = {
  [REDUCER_TODOLIST_NAME]: TodoInitialState;
};
