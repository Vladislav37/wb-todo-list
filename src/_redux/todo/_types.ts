import { REDUCER_TODOLIST_NAME } from './_constants';

export type TodoType = {
  id: string;
  name: string;
  description: string;
  isLoading: boolean;
};

export type TodoStorageType = {
  data: TodoType[];
  isLoadingTasks: boolean;
};

export type TodoStoragePartType = {
  [REDUCER_TODOLIST_NAME]: TodoStorageType;
};
