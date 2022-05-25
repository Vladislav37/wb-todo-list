import React from 'react';
import classnames from 'classnames/bind';
import { Field, Form } from 'react-final-form';
import { ButtonLink } from '@wildberries/ui-kit';
import styles from './index.module.scss';

type PropsType = {
  id: string;
  name: string;
  description: string;
  cancelClick?: any;
  submitClick?: any;
  editClick?: any;
  deleteClick?: any;
};

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Todo-card';

export const TodoCard = ({
  id,
  name,
  description,
  submitClick,
  editClick,
  cancelClick,
  deleteClick,
}: PropsType) => {
  return (
    <div className={cn(BLOCK_NAME)}>
      <Form
        initialValues={{ id, name, description }}
        onSubmit={async (values) => {
          submitClick(values);
        }}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                component="input"
                name="id"
                placeholder="Наименование таски"
                type="hidden"
              />
            </div>
            <div>
              <label>Наименование:</label>
              <Field
                component="input"
                name="name"
                placeholder="Наименование таски"
                type="text"
              />
            </div>
            <div>
              <label>Описание:</label>
              <Field
                component="input"
                name="description"
                placeholder="Описание таски"
                type="text"
              />
            </div>
            <div className={cn(`${BLOCK_NAME}__buttons`)}>
              {!id && <ButtonLink text="Save" type="submit" />}
              {id && (
                <ButtonLink
                  onClick={() => editClick(values)}
                  text="Edit"
                  type="button"
                />
              )}
              {!id && (
                <ButtonLink onClick={cancelClick} text="Cancel" type="button" />
              )}
              {id && (
                <ButtonLink
                  onClick={() => deleteClick(values)}
                  text="Delete"
                  type="button"
                />
              )}
            </div>
          </form>
        )}
      />
    </div>
  );
};
