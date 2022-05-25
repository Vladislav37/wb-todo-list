import { FETCH_TODOLIST_ACTION, UPDATE_TODO_ITEM } from './actions';
import { TodoInitialState, TodoType } from './types';

export const initialState: TodoInitialState = {
  todos: [],
};

const reducer = (state: TodoInitialState = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TODOLIST_ACTION:
      return {
        ...state,
        todos: payload.todos,
      };
    case UPDATE_TODO_ITEM:
      return {
        ...state,
        todos: [
          ...state.todos.map((td: TodoType) => {
            if (td.id === payload.id) {
              return payload;
            }

            return td;
          }),
        ],
      };
    default:
      return state;
  }
};

export default reducer;
