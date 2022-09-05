import { TodoType } from '@/pages/todo-list/_types';
import {
  createTodoItemActionSaga,
  deleteTodoItemActionSaga,
  resetNewTaskFormInitialValuesAction,
  setInitialTodoListAction,
  setNewTaskFormInitialValuesAction,
  setTodoListAction,
  showFormForNewTaskAction,
  startCardInfoLoadingAction,
  startCreatingNewTaskAction,
  stopCardInfoLoadingAction,
  stopCreatingNewTaskAction,
  updateTodoItemActionSaga,
} from '../actions';

const todoList: Array<TodoType> = [
  {
    description: 'dsafds',
    id: 'FKcnJ',
    isLoading: false,
    name: 'dsa1',
    isDeleting: false,
    isEditable: false,
  },
  {
    description: 'fdsdfs',
    id: '0t91g',
    isLoading: false,
    name: 'cdds',
    isDeleting: false,
    isEditable: false,
  },
  {
    description: 'dsadsa',
    id: 'inVeu',
    isLoading: false,
    name: 'dasda',
    isDeleting: false,
    isEditable: false,
  },
];

const todoCard: TodoType = {
  description: 'dsadsa',
  id: 'inVeu',
  isLoading: false,
  name: 'dasda',
  isDeleting: false,
  isEditable: false,
};

describe('actions test', () => {
  test('should do setTodoListAction with empty array', () => {
    const output = {
      type: 'SET_TODO_LIST',
      payload: [],
    };

    expect(setTodoListAction([])).toEqual(output);
  });

  test('should do setTodoListAction with todos array', () => {
    const output = {
      type: 'SET_TODO_LIST',
      payload: todoList,
    };

    expect(setTodoListAction(todoList)).toEqual(output);
  });

  test('should do setTodoListAction with undefined array', () => {
    const output = {
      type: 'SET_TODO_LIST',
      payload: undefined,
    };

    expect(setTodoListAction(undefined)).toEqual(output);
  });

  test('check static type  setTodoListAction', () => {
    expect(setTodoListAction(todoList).type).toBe(setTodoListAction.type);
  });

  test('should do setInitialTodoListAction', () => {
    const output = {
      type: 'SET_INITIAL_TODOLIST',
    };

    expect(setInitialTodoListAction()).toEqual(output);
  });

  test('check static type  setInitialTodoListAction', () => {
    expect(setInitialTodoListAction().type).toBe(setInitialTodoListAction.type);
  });

  test('should do createTodoItemActionSaga', () => {
    const output = {
      type: 'CREATE_TODO_ITEM',
      payload: todoCard,
    };

    expect(createTodoItemActionSaga(todoCard)).toEqual(output);
  });

  test('check static type  createTodoItemActionSaga', () => {
    expect(createTodoItemActionSaga(todoCard).type).toBe(
      createTodoItemActionSaga.type,
    );
  });

  test('should do updateTodoItemActionSaga', () => {
    const output = {
      type: 'UPDATE_TODO_ITEM',
      payload: todoCard,
    };

    expect(updateTodoItemActionSaga(todoCard)).toEqual(output);
  });

  test('check static type  updateTodoItemActionSaga', () => {
    expect(updateTodoItemActionSaga(todoCard).type).toBe(
      updateTodoItemActionSaga.type,
    );
  });

  test('should do deleteTodoItemActionSaga', () => {
    const todoId = 'inVeu';
    const output = {
      type: 'DELETE_TODO_ITEM',
      payload: todoId,
    };

    expect(deleteTodoItemActionSaga(todoId)).toEqual(output);
  });

  test('check static type  deleteTodoItemActionSaga', () => {
    expect(deleteTodoItemActionSaga('inVeu').type).toBe(
      deleteTodoItemActionSaga.type,
    );
  });

  test('should do startCardInfoLoadingAction', () => {
    const output = {
      type: 'START_LOADING',
    };

    expect(startCardInfoLoadingAction()).toEqual(output);
  });

  test('check static type  startCardInfoLoadingAction', () => {
    expect(startCardInfoLoadingAction().type).toBe(
      startCardInfoLoadingAction.type,
    );
  });

  test('should do stopCardInfoLoadingAction', () => {
    const output = {
      type: 'STOP_LOADING',
    };

    expect(stopCardInfoLoadingAction()).toEqual(output);
  });

  test('check static type  stopCardInfoLoadingAction', () => {
    expect(stopCardInfoLoadingAction().type).toBe(
      stopCardInfoLoadingAction.type,
    );
  });

  test('should do startCreatingNewTaskAction', () => {
    const output = {
      type: 'START_CREATING',
    };

    expect(startCreatingNewTaskAction()).toEqual(output);
  });

  test('check static type  startCreatingNewTaskAction', () => {
    expect(startCreatingNewTaskAction().type).toBe(
      startCreatingNewTaskAction.type,
    );
  });

  test('should do stopCreatingNewTaskAction', () => {
    const output = {
      type: 'STOP_CREATING',
    };

    expect(stopCreatingNewTaskAction()).toEqual(output);
  });

  test('check static type  stopCreatingNewTaskAction', () => {
    expect(stopCreatingNewTaskAction().type).toBe(
      stopCreatingNewTaskAction.type,
    );
  });

  test('should do showFormForNewTaskAction', () => {
    const output = {
      type: 'SHOW_FORM_FOR_NEW_TASK',
      payload: true,
    };

    expect(showFormForNewTaskAction(true)).toEqual(output);
  });

  test('check static type showFormForNewTaskAction', () => {
    expect(showFormForNewTaskAction(true).type).toBe(
      showFormForNewTaskAction.type,
    );
  });

  test('should do resetNewTaskFormInitialValuesAction', () => {
    const output = {
      type: 'RESET_INITIAL_VALUES',
    };

    expect(resetNewTaskFormInitialValuesAction()).toEqual(output);
  });

  test('check static type  resetNewTaskFormInitialValuesAction', () => {
    expect(resetNewTaskFormInitialValuesAction().type).toBe(
      resetNewTaskFormInitialValuesAction.type,
    );
  });

  test('should do setNewTaskFormInitialValuesAction', () => {
    const output = {
      type: 'SET_INITIAL_VALUES',
      payload: todoCard,
    };

    expect(setNewTaskFormInitialValuesAction(todoCard)).toEqual(output);
  });

  test('check static type  setNewTaskFormInitialValuesAction', () => {
    expect(setNewTaskFormInitialValuesAction(todoCard).type).toBe(
      setNewTaskFormInitialValuesAction.type,
    );
  });
});
