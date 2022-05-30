import {
  fetchTodoListAction,
  startCardInfoLoadingAction,
  stopCardInfoLoadingAction,
} from './actions';
import { TodoStorageType } from './_types';

export const initialState: TodoStorageType = {
  data: [],
  isLoadingTasks: false,
};

const reducer = (state: TodoStorageType = initialState, { type, payload }) => {
  switch (type) {
    case fetchTodoListAction.type:
      return {
        ...state,
        data: payload,
      };
    case startCardInfoLoadingAction.type:
      return { ...state, isLoadingTasks: true };
    case stopCardInfoLoadingAction.type:
      return { ...state, isLoadingTasks: false };
    default:
      return state;
  }
};

export default reducer;
