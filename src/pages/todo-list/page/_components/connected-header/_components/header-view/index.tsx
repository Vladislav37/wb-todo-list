import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { ButtonLink } from '@wildberries/ui-kit';
import i18next from 'i18next';
import {
  SubmitClickHandlerParamsType,
  TodoType,
} from '@/pages/todo-list/_types';
import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';
import { PAGE_SUB_NAMESPACE } from '@/pages/todo-list/_constants/translations/page-sub-namespace';
import { TodoCard } from '../../../todo-card';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'HeaderView';

type PropsType = {
  onSubmitClick: (params: SubmitClickHandlerParamsType) => void;
  showFormForNewTask: boolean;
  onToggleFormOpened: () => void;
  isNewTaskCreating: boolean;
  newTaskFormValues: TodoType;
};

export const HeaderView = memo(
  ({
    onSubmitClick,
    showFormForNewTask,
    onToggleFormOpened,
    isNewTaskCreating,
    newTaskFormValues,
  }: PropsType) => {
    return (
      <div className={cn(BLOCK_NAME)}>
        {showFormForNewTask ? (
          <div className={cn(`${BLOCK_NAME}__card`)}>
            <TodoCard
              deleteClick={onToggleFormOpened}
              description={newTaskFormValues.description}
              id={newTaskFormValues.id}
              isDeleting={newTaskFormValues.isDeleting}
              isEditable={newTaskFormValues.isEditable}
              isLoading={isNewTaskCreating}
              name={newTaskFormValues.name}
              submitClick={onSubmitClick}
            />
          </div>
        ) : (
          <ButtonLink
            onClick={onToggleFormOpened}
            text={i18next.t(
              `${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.buttons.createTask`,
            )}
            type="button"
            variant="add"
          />
        )}
      </div>
    );
  },
);
