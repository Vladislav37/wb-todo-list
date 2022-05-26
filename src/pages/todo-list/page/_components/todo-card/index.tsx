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
  cancelClick?: any;
  createClick?: any;
  updateClick?: any;
  deleteClick?: any;
};

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Todo-card';

export const TodoCard = ({
  id,
  name,
  description,
  createClick,
  updateClick,
  cancelClick,
  deleteClick,
}: PropsType) => {
  const [editableTask, setEditableTask] = useState(false);

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

  const deleteClickHandler = useCallback(
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
        `${editableTask || !id ? `${BLOCK_NAME}__editable` : ''}`,
      ])}
    >
      <Form
        initialValues={{ id, name, description }}
        onSubmit={async (values, form) => {
          createClick(values);
          form.reset();
        }}
        render={({ handleSubmit, values }) => (
          <form className={cn(`${BLOCK_NAME}__form`)} onSubmit={handleSubmit}>
            <Field component="input" name="id" type="hidden" />
            <div className={cn('form__fields')}>
              <div className={cn('field')}>
                <Field
                  component={FormSimpleInput}
                  disabled={!editableTask && id}
                  label="Name:"
                  name="name"
                  placeholder="Name task"
                />
              </div>
              <div className={cn('field')}>
                <Field
                  component={FormTextAreaInput}
                  disabled={!editableTask && id}
                  label="Description:"
                  name="description"
                  placeholder="Description task"
                />
              </div>
            </div>
            <div className={cn(`${BLOCK_NAME}__buttons`)}>
              <div className={cn('button')}>
                {!id && (
                  <ButtonLink
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
