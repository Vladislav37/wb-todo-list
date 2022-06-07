import { setModalAction } from '@wildberries/notifications';
import i18next from 'i18next';
import { PAGE_SUB_NAMESPACE } from '@/pages/todo-list/_constants/translations/page-sub-namespace';
import { TodoType } from '@/pages/todo-list/_types';
import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';

type UpdateIsLoadingStateForTodoListType = {
  items: Array<TodoType>;
  currentId: string;
  isLoading: boolean;
};

type UpdateIsEditableStateForTodoList = {
  items: Array<TodoType>;
  currentId: string;
  isEditable: boolean;
};

type UpdateIsDeletingStateForTodoList = {
  items: Array<TodoType>;
  currentId: string;
  isDeleting: boolean;
};

export const updateIsLoadingStateForTodoList = ({
  items,
  currentId,
  isLoading,
}: UpdateIsLoadingStateForTodoListType): Array<TodoType> => {
  return items.map((item: TodoType) =>
    item.id === currentId ? { ...item, isLoading } : item,
  );
};

export const updateIsDeletingStateForTodoList = ({
  items,
  currentId,
  isDeleting,
}: UpdateIsDeletingStateForTodoList): Array<TodoType> => {
  return items.map((item: TodoType) =>
    item.id === currentId ? { ...item, isDeleting } : item,
  );
};

export const updateIsEditableStateForTodoList = ({
  items,
  currentId,
  isEditable,
}: UpdateIsEditableStateForTodoList): Array<TodoType> => {
  return items.map((item: TodoType) =>
    item.id === currentId ? { ...item, isEditable } : item,
  );
};

export const callSuccesNotification = (): ReturnType<typeof setModalAction> => {
  return setModalAction({
    status: 'success',
    title: i18next.t(`${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.success.title`),
    text: i18next.t(`${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.success.text`),
    customHoldTimeout: 10000,
  });
};
