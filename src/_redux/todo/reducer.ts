import { FETCH_TODOLIST_ACTION } from './actions';
import { TodoInitialState } from './types';

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
    default:
      return state;
  }
};

export default reducer;
