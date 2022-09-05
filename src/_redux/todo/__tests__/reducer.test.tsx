import { TodoType } from '@/pages/todo-list/_types';
import {
  resetNewTaskFormInitialValuesAction,
  setInitialTodoListAction,
  setNewTaskFormInitialValuesAction,
  setTodoListAction,
  showFormForNewTaskAction,
  startCardInfoLoadingAction,
  startCreatingNewTaskAction,
  stopCardInfoLoadingAction,
  stopCreatingNewTaskAction,
} from '../actions';
import todoReducer, { initialState } from '../reducer';
import { TodoStorageType } from '../_types';

/** To Testing:
 *
 * actions
 * reducer
 * - selectors (селекторы не тестим так как используем библиотеку, которая уже протестирована, наверное:))
 * sagas
 *
 */

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

jest.mock('../actions', () => {
  const actions = jest.requireActual('../actions'); // повзволяет протестировать наличие экшна

  const startCardInfoLoadingActionMock = () => ({ type: 'START_LOADING' });
  startCardInfoLoadingActionMock.type = 'START_LOADING';

  const stopCardInfoLoadingActionMock = { type: 'STOP_LOADING' };
  stopCardInfoLoadingActionMock.type = 'STOP_LOADING';

  const startCreatingNewTaskActionMock = { type: 'START_CREATING' };
  startCreatingNewTaskActionMock.type = 'START_CREATING';

  const stopCreatingNewTaskActionMock = { type: 'STOP_CREATING' };
  stopCreatingNewTaskActionMock.type = 'STOP_CREATING';

  const showFormForNewTaskActionMock = (payload: boolean) => ({
    type: 'SHOW_FORM_FOR_NEW_TASK',
    payload,
  });
  showFormForNewTaskActionMock.type = 'SHOW_FORM_FOR_NEW_TASK';

  const setInitialTodoListActionMock = { type: 'SET_INITIAL_TODOLIST' };
  setInitialTodoListActionMock.type = 'SET_INITIAL_TODOLIST';

  const resetNewTaskFormInitialValuesActionMock = {
    type: 'RESET_INITIAL_VALUES',
  };
  resetNewTaskFormInitialValuesActionMock.type = 'RESET_INITIAL_VALUES';

  const setNewTaskFormInitialValuesActionMock = (payload: TodoType) => ({
    type: 'SET_INITIAL_VALUES',
    payload,
  });
  setNewTaskFormInitialValuesActionMock.type = 'SET_INITIAL_VALUES';

  const setTodoListActionMock = (payload: Array<TodoType>) => ({
    type: 'SET_TODO_LIST',
    payload,
  });
  setTodoListActionMock.type = 'SET_TODO_LIST';

  return {
    startCardInfoLoadingAction:
      actions.startCardInfoLoadingAction && startCardInfoLoadingActionMock,
    stopCardInfoLoadingAction:
      actions.stopCardInfoLoadingAction && stopCardInfoLoadingActionMock,
    startCreatingNewTaskAction:
      actions.startCreatingNewTaskAction && startCreatingNewTaskActionMock,
    stopCreatingNewTaskAction:
      actions.stopCreatingNewTaskAction && stopCreatingNewTaskActionMock,
    showFormForNewTaskAction:
      actions.showFormForNewTaskAction && showFormForNewTaskActionMock,
    setInitialTodoListAction:
      actions.setInitialTodoListAction && setInitialTodoListActionMock,
    resetNewTaskFormInitialValuesAction:
      actions.resetNewTaskFormInitialValuesAction &&
      resetNewTaskFormInitialValuesActionMock,
    setNewTaskFormInitialValuesAction:
      actions.setNewTaskFormInitialValuesAction &&
      setNewTaskFormInitialValuesActionMock,
    setTodoListAction: actions.setTodoListAction && setTodoListActionMock,
  };
});

const newTaskFormValues = {
  id: null,
  name: '',
  description: '',
  isDeleting: false,
  isEditable: false,
  isLoading: false,
};

describe('reducer tests', () => {
  test('should set areTasksLoading true', () => {
    const output = {
      ...initialState,
      areTasksLoading: true,
    };

    expect(todoReducer(initialState, startCardInfoLoadingAction)).toEqual(
      output,
    );
  });

  test('should set areTasksLoading true if initial state undefined', () => {
    const output = {
      ...initialState,
      areTasksLoading: true,
    };

    expect(todoReducer(undefined, startCardInfoLoadingAction)).toEqual(output);
  });

  test('should set areTasksLoading false', () => {
    const output = {
      ...initialState,
      areTasksLoading: false,
    };

    expect(todoReducer(initialState, stopCardInfoLoadingAction)).toEqual(
      output,
    );
  });

  test('should set areTasksLoading false if initial state undefined', () => {
    const output = {
      ...initialState,
      areTasksLoading: false,
    };

    expect(todoReducer(undefined, stopCardInfoLoadingAction)).toEqual(output);
  });

  test('should set isNewTaskCreating true', () => {
    const output = {
      ...initialState,
      isNewTaskCreating: true,
    };

    expect(todoReducer(initialState, startCreatingNewTaskAction)).toEqual(
      output,
    );
  });

  test('should set isNewTaskCreating true if initial state undefined', () => {
    const output = {
      ...initialState,
      isNewTaskCreating: true,
    };

    expect(todoReducer(undefined, startCreatingNewTaskAction)).toEqual(output);
  });

  test('should set isNewTaskCreating false', () => {
    const output = {
      ...initialState,
      isNewTaskCreating: false,
    };

    expect(todoReducer(initialState, stopCreatingNewTaskAction)).toEqual(
      output,
    );
  });

  test('should set isNewTaskCreating false if initial state undefined', () => {
    const output = {
      ...initialState,
      isNewTaskCreating: false,
    };

    expect(todoReducer(undefined, stopCreatingNewTaskAction)).toEqual(output);
  });

  test('should set showFormForNewTaskAction true', () => {
    const output = {
      ...initialState,
      showFormForNewTask: true,
    };

    expect(todoReducer(initialState, showFormForNewTaskAction(true))).toEqual(
      output,
    );
  });

  test('should set showFormForNewTaskAction true if initial state undefined', () => {
    const output = {
      ...initialState,
      showFormForNewTask: true,
    };

    expect(todoReducer(undefined, showFormForNewTaskAction(true))).toEqual(
      output,
    );
  });

  test('should set showFormForNewTaskAction false', () => {
    const output = {
      ...initialState,
      showFormForNewTask: false,
    };

    expect(todoReducer(initialState, showFormForNewTaskAction(false))).toEqual(
      output,
    );
  });

  test('should set showFormForNewTaskAction false if initial state undefined', () => {
    const output = {
      ...initialState,
      showFormForNewTask: false,
    };

    expect(todoReducer(undefined, showFormForNewTaskAction(false))).toEqual(
      output,
    );
  });

  test('should set empty todo list if initial state', () => {
    const output = {
      ...initialState,
      data: [],
    };

    expect(todoReducer(initialState, setInitialTodoListAction)).toEqual(output);
  });

  test('should set empty todo list if initial state undefined', () => {
    const output = {
      ...initialState,
      data: [],
    };

    expect(todoReducer(undefined, setInitialTodoListAction)).toEqual(output);
  });

  test('reset new task form values', () => {
    expect(
      todoReducer(initialState, resetNewTaskFormInitialValuesAction),
    ).toEqual(initialState);
  });

  test('reset new task form values if initial state undefined', () => {
    expect(todoReducer(undefined, resetNewTaskFormInitialValuesAction)).toEqual(
      initialState,
    );
  });

  test('set initial values for new task', () => {
    expect(
      todoReducer(
        initialState,
        setNewTaskFormInitialValuesAction(newTaskFormValues),
      ),
    ).toEqual(initialState);
  });

  test('set initial values for new task if initial state undefined', () => {
    expect(
      todoReducer(
        undefined,
        setNewTaskFormInitialValuesAction(newTaskFormValues),
      ),
    ).toEqual(initialState);
  });

  test('set initial values for new task if state is dirty', () => {
    const dirtyState: TodoStorageType = {
      ...initialState,
      newTaskFormValues: {
        id: '123',
        name: 'test',
        description: 'test description',
        isDeleting: true,
        isEditable: true,
        isLoading: true,
      },
    };

    expect(
      todoReducer(
        dirtyState,
        setNewTaskFormInitialValuesAction(newTaskFormValues),
      ),
    ).toEqual(initialState);
  });

  test('set todolist in state', () => {
    const output = {
      ...initialState,
      data: todoList,
    };

    expect(todoReducer(initialState, setTodoListAction(todoList))).toEqual(
      output,
    );
  });

  test('set empty todo list', () => {
    const emptyTodoList: Array<TodoType> = [];
    const output = {
      ...initialState,
      data: [],
    };

    expect(todoReducer(initialState, setTodoListAction(emptyTodoList))).toEqual(
      output,
    );
  });

  test('set empty todo list if initial state undefined', () => {
    const emptyTodoList: Array<TodoType> = [];
    const output = {
      ...initialState,
      data: [],
    };

    expect(todoReducer(undefined, setTodoListAction(emptyTodoList))).toEqual(
      output,
    );
  });
});
