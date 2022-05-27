import React, { useCallback, useState } from 'react';
import classnames from 'classnames/bind';
import { connect, useDispatch } from 'react-redux';
import { ButtonLink } from '@wildberries/ui-kit';
import {
  createTodoItemAction,
  deleteTodoItemAction,
  TodoInitialState,
  todoListStorageSelector,
  TodoType,
  updateTodoItemAction,
} from '@/_redux/todo';
// в конец импортов
import styles from './index.module.scss';
import { TodoCard } from './_components/todo-card';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Todo-page';

type PropsType = {
  todoList: {
    // лишняя вложенность
    todos: TodoType[];
  };
};

// зачем экспорт?
export const WrappedContainer = ({ todoList }: PropsType) => {
  // переписать на класс
  // mapdispatch
  const dispatch = useDispatch();
  const [showFormForNewTask, setShowFormForNewTask] = useState<boolean>(false);

  // usecallback
  const showFormForNewTaskHundler = () => setShowFormForNewTask(true);
  const cancelClickForForm = () => setShowFormForNewTask(false);

  // createClickForForm => handleCreateTask
  // to container component
  const createClickForForm = useCallback(
    (item: TodoType) => {
      // need after creation close new task form
      dispatch(createTodoItemAction(item));
    },
    [dispatch],
  );

  // deleteClickForForm => handleDeleteTask
  // to container component
  const deleteClickForForm = useCallback(
    // only id is needed for delete
    (item: TodoType) => {
      dispatch(deleteTodoItemAction(item));
    },
    [dispatch],
  );

  // updateClickForForm => handleUpdateTask
  const updateClickForForm = useCallback(
    (item: TodoType) => {
      dispatch(updateTodoItemAction(item));
    },
    [dispatch],
  );

  return (
    <div className={cn(BLOCK_NAME)} data-page="todo-page">
      <div className={cn(`${BLOCK_NAME}__header`)}>
        {showFormForNewTask ? (
          // нельзя таги без классов в бэме
          <div>
            <TodoCard
              cancelClick={cancelClickForForm}
              createClick={createClickForForm}
              description="" // ??
              id={null}
              isLoading={false}
              name=""
            />
          </div>
        ) : (
          <ButtonLink
            onClick={showFormForNewTaskHundler}
            text="Create task"
            type="button"
            variant="add"
          />
        )}
      </div>
      <div className={cn(`${BLOCK_NAME}__tasks`)}>
        {/* проверка на длину лишняя */}
        {todoList.todos.length > 0 &&
          todoList.todos.map(
            (
              td: TodoType, // td пиши нормально название переменной
            ) => (
              <div key={td.id}>
                <TodoCard
                  deleteClick={deleteClickForForm}
                  description={td.description}
                  id={td.id}
                  isLoading={td.isLoading}
                  name={td.name}
                  updateClick={updateClickForForm}
                />
              </div>
            ),
          )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: TodoInitialState) => ({
  todoList: todoListStorageSelector(state),
});

// все компоненты обернутые в коннект пишутся с префиксом Connected
// файл пишется по имени вытаскиваемого коннектенд компонента
export const Page = connect(mapStateToProps)(WrappedContainer);
