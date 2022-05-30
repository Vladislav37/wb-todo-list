import { TodoType } from '../_types';

export const updateIsLoadingStateForTodoList = (
  items: TodoType[],
  currentId: string,
  isLoading: boolean,
): Array<TodoType> => {
  return items.map((item: TodoType) =>
    item.id === currentId ? { ...item, isLoading } : item,
  );
};
