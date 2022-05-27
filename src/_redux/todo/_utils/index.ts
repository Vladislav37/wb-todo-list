import { TodoType } from '../types';

export const updateIsLoadingStateForTodoList = (
  items: TodoType[],
  currentId: string,
  isLoading: boolean,
  // utils style () => {return}
): Array<TodoType> =>
  items.map((item: TodoType) => {
    // => {return item.id === currentId ? ({...item,isLoading}) : item}
    if (item.id === currentId) {
      return {
        ...item,
        isLoading,
      };
    }

    return item;
  });
