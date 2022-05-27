import { fetchTodoListAction, setTodoItemLoadingAction } from './actions';
import { TodoInitialState } from './types';

export const initialState: TodoInitialState = {
  todos: [],
};

const reducer = (state: TodoInitialState = initialState, { type, payload }) => {
  switch (type) {
    case fetchTodoListAction.type:
      return {
        ...state,
        todos: payload.todos,
      };
    case setTodoItemLoadingAction.type:
      return {
        ...state,
        todos: payload,
      };
    default:
      return state;
  }
};

export default reducer;
