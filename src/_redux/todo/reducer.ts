import {
  resetNewTaskFormInitialValuesAction,
  setInitialTodoListAction,
  setNewTaskFormInitialValuesAction,
  setTodoListAction,
  setUpdatedTodoItemAction,
  showFormForNewTaskAction,
  startCardInfoLoadingAction,
  startCreatingNewTaskAction,
  stopCardInfoLoadingAction,
  stopCreatingNewTaskAction,
} from './actions';
import { TodoStorageType } from './_types';

export const initialState: TodoStorageType = {
  data: [],
  areTasksLoading: false,
  showFormForNewTask: false,
  isNewTaskCreating: false,
  newTaskFormValues: {
    id: null,
    name: '',
    description: '',
    isDeleting: false,
    isEditable: false,
    isLoading: false,
  },
};

const reducer = (
  state: TodoStorageType = initialState,
  { type, payload },
): TodoStorageType => {
  switch (type) {
    case setTodoListAction.type:
      return {
        ...state,
        data: payload,
      };

    case setUpdatedTodoItemAction.type:
      return {
        ...state,
        data: payload,
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

    case setInitialTodoListAction.type:
      return {
        ...state,
        data: [],
      };

    case resetNewTaskFormInitialValuesAction.type:
      return {
        ...state,
        newTaskFormValues: initialState.newTaskFormValues,
      };

    case setNewTaskFormInitialValuesAction.type:
      return {
        ...state,
        newTaskFormValues: payload,
      };

    default:
      return state;
  }
};

export default reducer;
