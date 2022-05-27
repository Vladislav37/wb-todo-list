import React, { useCallback, useState } from 'react';
import classnames from 'classnames/bind';
import { Field, Form } from 'react-final-form';
import {
  ButtonLink,
  FormSimpleInput,
  FormTextAreaInput,
} from '@wildberries/ui-kit';
import styles from './index.module.scss';

type PropsType = {
  id: string;
  name: string;
  description: string;
  isLoading: boolean;
  cancelClick?: any; // restricted
  createClick?: any; // restricted
  updateClick?: any; // restricted
  deleteClick?: any; // restricted
};

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Todo-card';

// memo и все функц компоненты завернуть в memo
export const TodoCard = ({
  id,
  name,
  description,
  isLoading,
  createClick,
  updateClick,
  cancelClick,
  deleteClick,
}: PropsType) => {
  const [editableTask, setEditableTask] = useState(false);

  // лишнее каррирование
  const editClickHandler = useCallback(
    (editFlag, values) => () => {
      if (editFlag) {
        updateClick(values);
        setEditableTask(false);
      } else {
        setEditableTask(true);
      }
    },
    [updateClick],
  );

  // лишнее каррирование
  const deleteClickHandler = useCallback(
    // несколько парамеров передаются объектом
    (editFlag, values) => () => {
      if (editFlag) {
        setEditableTask(false);
      } else {
        deleteClick(values);
      }
    },
    [deleteClick],
  );

  return (
    <div
      className={cn([
        `${BLOCK_NAME}`,
        // изучи как работает classnames
        `${editableTask || !id ? `${BLOCK_NAME}__editable` : ''}`,
      ])}
    >
      <Form
        initialValues={{ id, name, description, isLoading }}
        onSubmit={async (values, form) => {
          // вынести логику сабмита в контейнер
          // на каждый рендер создается новая ссылка в рендере
          // еще и асинхронная не понятно зачем то
          createClick({ ...values });
          form.reset();
        }}
        render={({ handleSubmit, values }) => (
          <form className={cn(`${BLOCK_NAME}__form`)} onSubmit={handleSubmit}>
            <div className={cn('form__fields')}>
              <div className={cn('field')}>
                <Field
                  component={FormSimpleInput}
                  // usememo
                  disabled={!editableTask && id}
                  label="Name:"
                  name="name"
                  placeholder="Name task"
                  required
                />
              </div>
              <div className={cn('field')}>
                <Field
                  component={FormTextAreaInput}
                  // usememo
                  disabled={!editableTask && id}
                  label="Description:"
                  name="description"
                  placeholder="Description task"
                  required
                  // validations wanted
                />
              </div>
            </div>
            <div className={cn(`${BLOCK_NAME}__buttons`)}>
              {/* not BEM */}
              {/* четыре кнопки можно написать меньшим кол-вом кнопок */}
              <div className={cn('button')}>
                {!id && (
                  <ButtonLink
                    isLoading={isLoading}
                    size="small"
                    text="Save"
                    type="submit"
                    variant="add"
                  />
                )}
              </div>
              <div className={cn('button')}>
                {id && (
                  <ButtonLink
                    isLoading={isLoading}
                    onClick={editClickHandler(editableTask, values)}
                    size="small"
                    text={editableTask ? 'Update' : 'Edit'}
                    type="button"
                    variant="add"
                  />
                )}
              </div>
              <div className={cn('button')}>
                {!id && (
                  <ButtonLink
                    isLoading={isLoading}
                    onClick={cancelClick}
                    size="small"
                    text="Cancel"
                    type="button"
                    variant="remove"
                  />
                )}
              </div>
              <div className={cn('button')}>
                {id && (
                  <ButtonLink
                    isLoading={isLoading}
                    onClick={deleteClickHandler(editableTask, values)}
                    size="small"
                    text={editableTask ? 'Cancel' : 'Delete'}
                    type="button"
                    variant="remove"
                  />
                )}
              </div>
            </div>
          </form>
        )}
      />
    </div>
  );
};
