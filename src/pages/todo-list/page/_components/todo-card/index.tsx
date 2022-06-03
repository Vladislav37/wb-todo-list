import React, { memo, useCallback, useMemo } from 'react';
import classnames from 'classnames/bind';
import { Field, Form } from 'react-final-form';
import {
  ButtonLink,
  FormSimpleInput,
  FormTextAreaInput,
} from '@wildberries/ui-kit';
import i18next from 'i18next';
import {
  SubmitClickHandlerParamsType,
  TodoType,
} from '@/pages/todo-list/_types';
import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';
import { PAGE_SUB_NAMESPACE } from '@/pages/todo-list/_constants/translations/page-sub-namespace';
import { CONTACTS_VALIDATIONS } from './_constants';
import { getTextDeleteButton, getTextSubmitButton } from './_utils';
import styles from './index.module.scss';

type PropsType = {
  id: string;
  name?: string;
  description?: string;
  isLoading: boolean;
  isEditable: boolean;
  isDeleting: boolean;
  deleteClick?: (params: string) => void;
  submitClick?: (params: SubmitClickHandlerParamsType) => void;
};

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Todo-card';

const SUBSCRIBTION = { submitting: true };

export const TodoCard = memo(
  ({
    id,
    name = '',
    description = '',
    isLoading,
    isEditable,
    isDeleting,
    deleteClick,
    submitClick,
  }: PropsType) => {
    const disabledField: boolean = useMemo(
      () => !isEditable && Boolean(id),
      [id, isEditable],
    );

    const textDeleteButton: string = useMemo(
      () => getTextDeleteButton(disabledField),
      [disabledField],
    );

    const textSubmitButton: string = useMemo(
      () => getTextSubmitButton({ id, editableTask: isEditable }),
      [id, isEditable],
    );

    const deleteClickHandler = useCallback(() => {
      deleteClick(id);
    }, [deleteClick, id]);

    const submitClickHandler = useCallback(
      (values: TodoType) => {
        submitClick({ values, isEditable });
      },
      [isEditable, submitClick],
    );

    return (
      <div
        className={cn(BLOCK_NAME, {
          [`${BLOCK_NAME}--editable`]: !disabledField,
        })}
      >
        <Form
          initialValues={{ id, name, description, isLoading }}
          onSubmit={submitClickHandler}
          render={({ handleSubmit }) => (
            <form className={cn(`${BLOCK_NAME}__form`)} onSubmit={handleSubmit}>
              <div className={cn(`${BLOCK_NAME}__field`)}>
                <Field
                  component={FormSimpleInput}
                  disabled={disabledField}
                  label={i18next.t(
                    `${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.fields.name`,
                  )}
                  name="name"
                  placeholder={i18next.t(
                    `${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.fields.namePlaceholder`,
                  )}
                  required
                  validate={CONTACTS_VALIDATIONS.name}
                />
              </div>
              <div className={cn(`${BLOCK_NAME}__field`)}>
                <Field
                  component={FormTextAreaInput}
                  disabled={disabledField}
                  label={i18next.t(
                    `${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.fields.description`,
                  )}
                  name="description"
                  placeholder={i18next.t(
                    `${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.fields.descriptionPlaceholder`,
                  )}
                  required
                  validate={CONTACTS_VALIDATIONS.description}
                />
              </div>
              <div className={cn(`${BLOCK_NAME}__buttons`)}>
                <div className={cn(`${BLOCK_NAME}__button`)}>
                  <ButtonLink
                    isLoading={isLoading}
                    size="small"
                    text={textSubmitButton}
                    type="submit"
                    variant="add"
                  />
                </div>
                <div className={cn(`${BLOCK_NAME}__button`)}>
                  <ButtonLink
                    isLoading={isDeleting}
                    onClick={deleteClickHandler}
                    size="small"
                    text={textDeleteButton}
                    type="button"
                    variant="remove"
                  />
                </div>
              </div>
            </form>
          )}
          subscription={SUBSCRIBTION}
        />
      </div>
    );
  },
);
