import { TodoType } from '@/pages/todo-list/_types';
import todoReducer, { initialState } from '../reducer';
import {
  areTasksLoadingSelector,
  isNewTaskCreatingSelector,
  newTaskFormValuesSelector,
  showFormForNewTaskSelector,
  todoListSelector,
} from '../selectors';
import { REDUCER_TODOLIST_NAME } from '../_constants';
import { TodoStoragePartType, TodoStorageType } from '../_types';

const store: TodoStoragePartType = {
  [REDUCER_TODOLIST_NAME]: initialState,
};

const newTaskFormValues = {
  id: null,
  name: '',
  description: '',
  isDeleting: false,
  isEditable: false,
  isLoading: false,
};

describe('redux tests', () => {
  describe('selectors tests initial state', () => {
    test('todoListSelector with initial state', () => {
      expect(todoListSelector(store)).toEqual([]);
    });

    test('areTasksLoadingSelector with initial state', () => {
      expect(areTasksLoadingSelector(store)).toBe(false);
    });

    test('showFormForNewTaskSelector with initial state', () => {
      expect(showFormForNewTaskSelector(store)).toBe(false);
    });

    test('isNewTaskCreatingSelector with initial state', () => {
      expect(isNewTaskCreatingSelector(store)).toBe(false);
    });

    test('newTaskFormValuesSelector with initial state', () => {
      expect(newTaskFormValuesSelector(store)).toEqual(newTaskFormValues);
    });
  });

  describe('reducer tests', () => {
    const startCardInfoLoadingAction = { type: 'START_LOADING' };
    const stopCardInfoLoadingAction = { type: 'STOP_LOADING' };
    const startCreatingNewTaskAction = { type: 'START_CREATING' };
    const stopCreatingNewTaskAction = { type: 'STOP_CREATING' };
    const showFormForNewTaskAction = (payload: boolean) => ({
      type: 'SHOW_FORM_FOR_NEW_TASK',
      payload,
    });
    const setInitialTodoListAction = { type: 'SET_INITIAL_TODOLIST' };
    const resetNewTaskFormInitialValuesAction = {
      type: 'RESET_INITIAL_VALUES',
    };
    const setNewTaskFormInitialValuesAction = (payload: TodoType) => ({
      type: 'SET_INITIAL_VALUES',
      payload,
    });
    const setTodoListAction = (payload: Array<TodoType>) => ({
      type: 'SET_TODO_LIST',
      payload,
    });

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

      expect(todoReducer(undefined, startCardInfoLoadingAction)).toEqual(
        output,
      );
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

      expect(todoReducer(undefined, startCreatingNewTaskAction)).toEqual(
        output,
      );
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

      expect(
        todoReducer(initialState, showFormForNewTaskAction(false)),
      ).toEqual(output);
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

      expect(todoReducer(initialState, setInitialTodoListAction)).toEqual(
        output,
      );
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
      expect(
        todoReducer(undefined, resetNewTaskFormInitialValuesAction),
      ).toEqual(initialState);
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

      expect(
        todoReducer(initialState, setTodoListAction(emptyTodoList)),
      ).toEqual(output);
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
});
