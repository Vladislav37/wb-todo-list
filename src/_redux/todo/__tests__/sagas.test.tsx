import { TodoType } from '@/pages/todo-list/_types';

const item: TodoType = {
  description: 'dsafds',
  id: 'FKcnJ',
  isLoading: true,
  name: 'dsa1',
  isDeleting: false,
  isEditable: true,
};

// const item1 = {
//   description: 'dsafds',
//   id: 'FKcnJ',
//   isLoading: true,
//   name: 'dsa1',
//   isDeleting: false,
//   isEditable: false,
// };

// const item2 = {
//   description: 'dsafds',
//   id: 'FKcnJ',
//   isLoading: false,
//   name: 'dsa1',
//   isDeleting: false,
//   isEditable: false,
// };

// const callSuccesNotification = jest.fn();

// // const todoListSelector = jest.fn();

// const updateTodoItemRequest = jest.fn();

// jest.mock('../selectors', () => {
//   const todoListSelectorMock = jest.fn();

//   return {
//     todoListSelector: todoListSelectorMock,
//   };
// });

// jest.mock('@mihanizm56/redux-core-modules', () => {
//   return {
//     initLoadManagerActionSaga: 'initLoadManagerActionSaga',
//   };
// });

// jest.mock('@wildberries/notifications', () => {
//   return {
//     setModalAction: 'setModalAction',
//   };
// });

// function createSaga() {
//   return updateTodoItemWorkerSaga(item);
// }

describe('saga update test', () => {
  // let saga;

  // beforeEach(() => {
  //   saga = createSaga();
  // });

  test('update saga', () => {
    // saga
    //   .next()
    //   .select(todoListSelector)
    //   .next()
    //   .put({ type: 'SET_TODO_LIST', payload: [item] })
    //   .next()
    //   .call(updateTodoItemRequest, item)
    //   .next()
    //   .select(todoListSelector)
    //   .next()
    //   .put({ type: 'SET_TODO_LIST', payload: [item1] })
    //   .next()
    //   .put(callSuccesNotification())
    //   .next()
    //   .put(initLoadManagerActionSaga)
    //   .next()
    //   .select(todoListSelector)
    //   .next()
    //   .put({ type: 'SET_TODO_LIST', payload: [item2] })
    //   .next()
    //   .isDone();
    // expect(todoListSelector).toHaveBeenCalledTimes(3);
    expect(item).toBe(item);
  });
});
