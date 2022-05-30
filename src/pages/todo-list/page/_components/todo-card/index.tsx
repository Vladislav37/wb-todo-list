import React, { memo, useCallback, useMemo, useState } from 'react';
import classnames from 'classnames/bind';
import { Field, Form } from 'react-final-form';
import {
  ButtonLink,
  FormSimpleInput,
  FormTextAreaInput,
} from '@wildberries/ui-kit';
import { TodoType } from '@/_redux/todo';
import { CONTACTS_VALIDATIONS } from './_constants';
import styles from './index.module.scss';

type PropsType = {
  id: string;
  name?: string;
  description?: string;
  isLoading: boolean;
  cancelClick?: () => void;
  createClick?: (params: TodoType) => void;
  updateClick?: (params: TodoType) => void;
  deleteClick?: (params: TodoType) => void;
};

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Todo-card';

export const TodoCard = memo(
  ({
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

    const disabledField = useMemo(
      () => !editableTask && id,
      [editableTask, id],
    );

    const textSubmitButton = useMemo(() => {
      if (id) {
        return editableTask ? 'Update' : 'Edit';
      }

      return 'Save';
    }, [editableTask, id]);

    // лишнее каррирование ????
    const deleteClickHandler = useCallback(
      (values) => () => {
        if (editableTask) {
          setEditableTask(false);
        } else {
          deleteClick(values);
        }
      },
      [deleteClick, editableTask],
    );

    // как вынести в контейнер ????
    const submitClickHandler = useCallback(
      (values: TodoType, form: any) => {
        if (values.id) {
          if (editableTask) {
            updateClick(values);
            setEditableTask(false);
          } else {
            setEditableTask(true);
          }
        } else {
          createClick({ ...values });
          form.reset();
        }
      },
      [createClick, editableTask, updateClick],
    );

    return (
      <div
        className={cn(
          BLOCK_NAME,
          `${!disabledField ? `${BLOCK_NAME}__editable` : ''}`,
        )}
      >
        <Form
          initialValues={{ id, name, description, isLoading }}
          onSubmit={submitClickHandler}
          render={({ handleSubmit }) => (
            <form className={cn(`${BLOCK_NAME}__form`)} onSubmit={handleSubmit}>
              <div className={cn(`${BLOCK_NAME}__form__field`)}>
                <Field
                  component={FormSimpleInput}
                  disabled={disabledField}
                  label="Name:"
                  name="name"
                  placeholder="Name task"
                  required
                  validate={CONTACTS_VALIDATIONS.name}
                />
              </div>
              <div className={cn(`${BLOCK_NAME}__form__field`)}>
                <Field
                  component={FormTextAreaInput}
                  disabled={disabledField}
                  label="Description:"
                  name="description"
                  placeholder="Description task"
                  required
                  validate={CONTACTS_VALIDATIONS.description}
                />
              </div>
              <div className={cn(`${BLOCK_NAME}__buttons`)}>
                <div className={cn(`${BLOCK_NAME}__buttons__button`)}>
                  <ButtonLink
                    isLoading={isLoading}
                    size="small"
                    text={textSubmitButton}
                    type="submit"
                    variant="add"
                  />
                </div>
                <div className={cn(`${BLOCK_NAME}__buttons__button`)}>
                  <ButtonLink
                    onClick={id ? deleteClickHandler({ id }) : cancelClick}
                    size="small"
                    text={!disabledField ? 'Cancel' : 'Delete'}
                    type="button"
                    variant="remove"
                  />
                </div>
              </div>
            </form>
          )}
          subscription={{ submitting: true }}
        />
      </div>
    );
  },
);
