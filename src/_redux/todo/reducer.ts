import {
  fetchTodoListAction,
  setUpdatedTodoItemActionSaga,
  showFormForNewTaskActionSaga,
  startCardInfoLoadingAction,
  startCreatingNewTaskActionSaga,
  stopCardInfoLoadingAction,
  stopCreatingNewTaskActionSaga,
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
    case setUpdatedTodoItemActionSaga.type:
      return {
        ...state,
        data: { ...state.data, todos: payload },
      };
    case startCardInfoLoadingAction.type:
      return { ...state, areTasksLoading: true };
    case stopCardInfoLoadingAction.type:
      return { ...state, areTasksLoading: false };
    case showFormForNewTaskActionSaga.type:
      return {
        ...state,
        showFormForNewTask: payload,
      };
    case startCreatingNewTaskActionSaga.type:
      return { ...state, isNewTaskCreating: true };
    case stopCreatingNewTaskActionSaga.type:
      return { ...state, isNewTaskCreating: false };
    default:
      return state;
  }
};

export default reducer;
