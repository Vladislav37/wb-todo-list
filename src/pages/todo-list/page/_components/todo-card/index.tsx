import React, { memo, useCallback, useMemo } from 'react';
import classnames from 'classnames/bind';
import { Field, Form } from 'react-final-form';
import {
  ButtonLink,
  FormSimpleInput,
  FormTextAreaInput,
} from '@wildberries/ui-kit';
import i18next from 'i18next';
import { SubmitClickHandlerType, TodoType } from '@/pages/todo-list/_types';
import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';
import { PAGE_SUB_NAMESPACE } from '@/pages/todo-list/_constants/translations/page-sub-namespace';
import { CONTACTS_VALIDATIONS } from './_constants';
import styles from './index.module.scss';
import { getTextSubmitButton } from './_utils';

type PropsType = {
  id: string;
  name?: string;
  description?: string;
  isLoading: boolean;
  isEditable: boolean;
  isDeleting: boolean;
  deleteClick?: (params: string) => void;
  submitClick?: (params: SubmitClickHandlerType) => void;
};

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Todo-card';

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
    const disabledField = useMemo(() => !isEditable && id, [id, isEditable]);

    const textDeleteButton = useMemo(() => {
      return !disabledField
        ? i18next.t(`${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.buttons.cancel`)
        : i18next.t(`${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.buttons.delete`);
    }, [disabledField]);

    const subscriptionObj = { submitting: true };

    const textSubmitButton = useMemo(
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
              <div className={cn('field')}>
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
              <div className={cn('field')}>
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
                <div className={cn('button')}>
                  <ButtonLink
                    isLoading={isLoading}
                    size="small"
                    text={textSubmitButton}
                    type="submit"
                    variant="add"
                  />
                </div>
                <div className={cn('button')}>
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
          subscription={subscriptionObj}
        />
      </div>
    );
  },
);
