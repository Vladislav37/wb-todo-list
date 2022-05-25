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
import styles from './index.module.scss';
import { TodoCard } from './_components/todo-card';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Todo-page';

type PropsType = {
  todoList: {
    todos: TodoType[];
  };
};

export const WrappedContainer = ({ todoList }: PropsType) => {
  const dispatch = useDispatch();
  const [showFormForNewTask, setShowFormForNewTask] = useState<boolean>(false);

  const showFormForNewTaskHundler = () => setShowFormForNewTask(true);
  const cancelClickForForm = () => setShowFormForNewTask(false);

  const submitClickForForm = useCallback(
    (item: TodoType) => {
      dispatch(createTodoItemAction(item));
    },
    [dispatch],
  );

  const deleteClickForForm = useCallback(
    (item: TodoType) => {
      dispatch(deleteTodoItemAction(item));
    },
    [dispatch],
  );

  const saveClickForForm = useCallback(
    (item: TodoType) => {
      dispatch(updateTodoItemAction(item));
    },
    [dispatch],
  );

  return (
    <div className={cn(BLOCK_NAME)} data-page="todo-page">
      <div className={cn(`${BLOCK_NAME}__header`)}>
        {showFormForNewTask ? (
          <TodoCard
            cancelClick={cancelClickForForm}
            description=""
            id={null}
            name=""
            submitClick={submitClickForForm}
          />
        ) : (
          <ButtonLink
            onClick={showFormForNewTaskHundler}
            text="Создать таску"
            type="button"
          />
        )}
      </div>
      <div className={cn(`${BLOCK_NAME}__tasks`)}>
        {todoList.todos.length > 0 &&
          todoList.todos.map((td: TodoType) => (
            <TodoCard
              key={td.id}
              deleteClick={deleteClickForForm}
              description={td.description}
              editClick={saveClickForForm}
              id={td.id}
              name={td.name}
            />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: TodoInitialState) => ({
  todoList: todoListStorageSelector(state),
});

export const Page = connect(mapStateToProps)(WrappedContainer);
