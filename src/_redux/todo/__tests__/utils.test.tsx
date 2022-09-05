import { TodoType } from '@/pages/todo-list/_types';
import { updatePropertyState } from '@/_utils/todo/update-property-state';

const todoList: Array<TodoType> = [
  {
    description: 'dsafds',
    id: 'FKcnJ',
    isLoading: false,
    name: 'dsa1',
    isDeleting: false,
    isEditable: false,
  },
];

describe('utils tests', () => {
  test('update isLoading', () => {
    const output = [
      {
        description: 'dsafds',
        id: 'FKcnJ',
        isLoading: true,
        name: 'dsa1',
        isDeleting: false,
        isEditable: false,
      },
    ];

    expect(
      updatePropertyState({
        items: todoList,
        currentId: 'FKcnJ',
        property: 'isLoading',
        value: true,
      }),
    ).toEqual(output);
  });

  test('undefined todolist update', () => {
    expect(
      updatePropertyState({
        items: undefined,
        currentId: 'FKcnJ',
        property: 'isLoading',
        value: true,
      }),
    ).toEqual(undefined);
  });

  test('update isEditable', () => {
    const output = [
      {
        description: 'dsafds',
        id: 'FKcnJ',
        isLoading: false,
        name: 'dsa1',
        isDeleting: false,
        isEditable: true,
      },
    ];

    expect(
      updatePropertyState({
        items: todoList,
        currentId: 'FKcnJ',
        property: 'isEditable',
        value: true,
      }),
    ).toEqual(output);
  });

  test('update isDeleting', () => {
    const output = [
      {
        description: 'dsafds',
        id: 'FKcnJ',
        isLoading: false,
        name: 'dsa1',
        isDeleting: true,
        isEditable: false,
      },
    ];

    expect(
      updatePropertyState({
        items: todoList,
        currentId: 'FKcnJ',
        property: 'isDeleting',
        value: true,
      }),
    ).toEqual(output);
  });
});
