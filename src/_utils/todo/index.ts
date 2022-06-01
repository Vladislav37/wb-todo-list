import { TodoType } from '@/pages/todo-list/_types';

type UpdateIsLoadingStateForTodoListType = {
  items: TodoType[];
  currentId: string;
  isLoading: boolean;
};

type UpdateIsEditableStateForTodoList = {
  items: TodoType[];
  currentId: string;
  isEditable: boolean;
};

type UpdateIsDeletingStateForTodoList = {
  items: TodoType[];
  currentId: string;
  isDeleting: boolean;
};

export const updateIsLoadingStateForTodoList = ({
  items,
  currentId,
  isLoading,
}: UpdateIsLoadingStateForTodoListType): Array<TodoType> => {
  return items.map((item: TodoType) =>
    item.id === currentId ? { ...item, isLoading } : item,
  );
};

export const updateIsDeletingStateForTodoList = ({
  items,
  currentId,
  isDeleting,
}: UpdateIsDeletingStateForTodoList): Array<TodoType> => {
  return items.map((item: TodoType) =>
    item.id === currentId ? { ...item, isDeleting } : item,
  );
};

export const updateIsEditableStateForTodoList = ({
  items,
  currentId,
  isEditable,
}: UpdateIsEditableStateForTodoList): Array<TodoType> => {
  return items.map((item: TodoType) =>
    item.id === currentId ? { ...item, isEditable } : item,
  );
};
