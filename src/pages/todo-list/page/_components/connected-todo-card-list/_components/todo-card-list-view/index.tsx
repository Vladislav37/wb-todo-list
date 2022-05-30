import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Preloader } from '@wildberries/ui-kit';
import { TodoType } from '@/_redux/todo';
import { TodoCard } from '../../../todo-card';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'TodoCardListView';

type PropsType = {
  todoList: TodoType[];
  onDeleteClick: (params: TodoType) => void;
  onUpdateClick: (params: TodoType) => void;
  isLoadingList: boolean;
};

export const TodoCardListView = memo(
  ({ todoList, onDeleteClick, onUpdateClick, isLoadingList }: PropsType) => {
    return (
      <div className={cn(BLOCK_NAME)}>
        {isLoadingList ? (
          <Preloader color="rich-grey" size="medium" />
        ) : (
          todoList.map((todo: TodoType) => (
            <div key={todo.id} className={cn(`${BLOCK_NAME}__item`)}>
              <TodoCard
                deleteClick={onDeleteClick}
                description={todo.description}
                id={todo.id}
                isLoading={todo.isLoading}
                name={todo.name}
                updateClick={onUpdateClick}
              />
            </div>
          ))
        )}
      </div>
    );
  },
);
