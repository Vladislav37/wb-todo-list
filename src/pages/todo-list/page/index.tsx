import React, { lazy, memo, Suspense } from 'react';
import classnames from 'classnames/bind';
import { Preview } from '@wildberries/preview-component';
import styles from './index.module.scss';

const ConnectedHeader = lazy(() => import('./_components/connected-header'));
const ConnectedTodoCardList = lazy(
  () => import('./_components/connected-todo-card-list'),
);

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Todo-page';

export const Page = memo(() => {
  return (
    <div className={cn(BLOCK_NAME)} data-page="todo-page">
      <Suspense fallback={<Preview mobileOnly />}>
        <ConnectedHeader />
      </Suspense>
      <Suspense fallback={<></>}>
        <ConnectedTodoCardList />
      </Suspense>
    </div>
  );
});
