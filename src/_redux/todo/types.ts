import { REDUCER_TODOLIST_NAME } from './constants';

// types.ts => _types.ts
export type TodoType = {
  id?: string; // разве у тодо карточки может не быть ид ?
  name?: string; // и имени
  description?: string; // и описания
  isLoading?: boolean; // и флага загрузки
};

// TodoInitialState => Todo(Storage|State)Type
// все интерфейсы начинаются с I а все типы оканчиваются с Type
export type TodoInitialState = {
  todos: TodoType[];
};

export type TodoStoragePartType = {
  [REDUCER_TODOLIST_NAME]: TodoInitialState;
};
