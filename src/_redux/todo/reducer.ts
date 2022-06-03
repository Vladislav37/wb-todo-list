import {
  fetchTodoListAction,
  setUpdatedTodoItemAction,
  showFormForNewTaskAction,
  startCardInfoLoadingAction,
  startCreatingNewTaskAction,
  stopCardInfoLoadingAction,
  stopCreatingNewTaskAction,
} from './actions';
import { TodoStorageType } from './_types';

export const initialState: TodoStorageType = {
  data: {
    todos: [],
  },
  areTasksLoading: false,
  showFormForNewTask: false,
  isNewTaskCreating: false,
};

const reducer = (
  state: TodoStorageType = initialState,
  { type, payload },
): TodoStorageType => {
  switch (type) {
    case fetchTodoListAction.type:
      return {
        ...state,
        data: payload,
      };
    case setUpdatedTodoItemAction.type:
      return {
        ...state,
        data: { ...state.data, todos: payload },
      };
    case startCardInfoLoadingAction.type:
      return { ...state, areTasksLoading: true };
    case stopCardInfoLoadingAction.type:
      return { ...state, areTasksLoading: false };
    case showFormForNewTaskAction.type:
      return {
        ...state,
        showFormForNewTask: payload,
      };
    case startCreatingNewTaskAction.type:
      return { ...state, isNewTaskCreating: true };
    case stopCreatingNewTaskAction.type:
      return { ...state, isNewTaskCreating: false };
    default:
      return state;
  }
};

export default reducer;
