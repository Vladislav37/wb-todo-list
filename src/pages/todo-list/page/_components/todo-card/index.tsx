import React, { useCallback, useState } from 'react';
import classnames from 'classnames/bind';
import { Field, Form } from 'react-final-form';
import { ButtonLink } from '@wildberries/ui-kit';
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
          <form onSubmit={handleSubmit}>
            <div>
              <Field component="input" name="id" type="hidden" />
            </div>
            <div>
              <label>Наименование:</label>
              <Field
                component="input"
                disabled={!editableTask && id}
                name="name"
                placeholder="Наименование таски"
                type="text"
              />
              {/* <Field name="name">
                {(props) => (
                  <SimpleInput id="2" name={props.name} value={name} />
                )}
              </Field> */}
            </div>
            <div>
              <label>Описание:</label>
              <Field
                component="input"
                disabled={!editableTask && id}
                name="description"
                placeholder="Описание таски"
                type="text"
              />
              {/* <SimpleInput
                id="3"
                name="description"
                readOnly={false}
                value={description}
              /> */}
            </div>
            <div className={cn(`${BLOCK_NAME}__buttons`)}>
              {!id && <ButtonLink text="Save" type="submit" variant="add" />}
              {id && (
                <ButtonLink
                  onClick={editClickHandler(editableTask, values)}
                  text={editableTask ? 'Update' : 'Edit'}
                  type="button"
                  variant="add"
                />
              )}
              {!id && (
                <ButtonLink
                  onClick={cancelClick}
                  text="Cancel"
                  type="button"
                  variant="remove"
                />
              )}
              {id && (
                <ButtonLink
                  onClick={deleteClickHandler(editableTask, values)}
                  text={editableTask ? 'Cancel' : 'Delete'}
                  type="button"
                  variant="remove"
                />
              )}
            </div>
          </form>
        )}
      />
    </div>
  );
};
