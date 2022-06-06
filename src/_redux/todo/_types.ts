import { TodoType } from '@/pages/todo-list/_types';
import { REDUCER_TODOLIST_NAME } from './_constants';

export type TodoStorageType = {
  data: Array<TodoType>;
  areTasksLoading: boolean;
  showFormForNewTask: boolean;
  isNewTaskCreating: boolean;
};

export type TodoStoragePartType = {
  [REDUCER_TODOLIST_NAME]: TodoStorageType;
};
