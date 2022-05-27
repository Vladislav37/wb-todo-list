import { TodoType } from '../types';

export const updateIsLoadingStateForTodoList = (
  items: TodoType[],
  currentId: string,
  isLoading: boolean,
): Array<TodoType> =>
  items.map((item: TodoType) => {
    if (item.id === currentId) {
      return {
        ...item,
        isLoading,
      };
    }

    return item;
  });
