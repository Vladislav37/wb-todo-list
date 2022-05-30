import React, { memo, useCallback, useState } from 'react';
import classnames from 'classnames/bind';
import { ButtonLink } from '@wildberries/ui-kit';
import { TodoType } from '@/_redux/todo';
import { TodoCard } from '../../../todo-card';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'HeaderView';

type PropsType = {
  onCreateClick: (params: TodoType) => void;
};

export const HeaderView = memo(({ onCreateClick }: PropsType) => {
  const [showFormForNewTask, setShowFormForNewTask] = useState<boolean>(false);

  const showFormForNewTaskHundler = useCallback(
    () => setShowFormForNewTask(!showFormForNewTask),
    [showFormForNewTask],
  );

  return (
    <div className={cn(BLOCK_NAME)}>
      {showFormForNewTask ? (
        <div className={cn(`${BLOCK_NAME}__card`)}>
          <TodoCard
            cancelClick={showFormForNewTaskHundler}
            createClick={onCreateClick}
            id={null}
            isLoading={false}
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
  );
});
