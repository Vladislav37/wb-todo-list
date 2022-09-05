import { TodoType } from '@/pages/todo-list/_types';

type ParamsType = {
  items: Array<TodoType>;
  currentId: string;
  property: string;
  value: boolean;
};

export const updatePropertyState = ({
  items,
  currentId,
  property,
  value,
}: ParamsType): Array<TodoType> => {
  return items?.map((item: TodoType) =>
    item.id === currentId ? { ...item, [property]: value } : item,
  );
};
