import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Preloader } from '@wildberries/ui-kit';
import {
  SubmitClickHandlerParamsType,
  TodoType,
} from '@/pages/todo-list/_types';
import { TodoCard } from '../../../todo-card';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'TodoCardListView';

type PropsType = {
  todoList: Array<TodoType>;
  onDeleteClick: (params: string) => void;
  onSubmitClick: (params: SubmitClickHandlerParamsType) => void;
  isLoading: boolean;
};

export const TodoCardListView = memo(
  ({ todoList, onDeleteClick, onSubmitClick, isLoading }: PropsType) => {
    return (
      <div className={cn(BLOCK_NAME)}>
        {isLoading ? (
          <Preloader color="rich-grey" size="medium" />
        ) : (
          todoList.map((todo: TodoType) => (
            <div key={todo.id} className={cn(`${BLOCK_NAME}__item`)}>
              <TodoCard
                deleteClick={onDeleteClick}
                description={todo.description}
                id={todo.id}
                isDeleting={todo.isDeleting}
                isEditable={todo.isEditable}
                isLoading={todo.isLoading}
                name={todo.name}
                submitClick={onSubmitClick}
              />
            </div>
          ))
        )}
      </div>
    );
  },
);
