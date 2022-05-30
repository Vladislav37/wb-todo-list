import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { ConnectedTodoCardList } from './_components/connected-todo-card-list';
import styles from './index.module.scss';
import { ConnectedHeader } from './_components/connected-header';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Todo-page';

export const Page = memo(() => {
  return (
    <div className={cn(BLOCK_NAME)} data-page="todo-page">
      <ConnectedHeader />
      <ConnectedTodoCardList />
    </div>
  );
});
