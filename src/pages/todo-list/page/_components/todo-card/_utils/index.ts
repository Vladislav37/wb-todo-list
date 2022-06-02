import i18next from 'i18next';
import { PAGE_SUB_NAMESPACE } from '@/pages/todo-list/_constants/translations/page-sub-namespace';
import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';

type GetTextSubmitButtonType = {
  id: string;
  editableTask: boolean;
};

export const getTextSubmitButton = ({
  id,
  editableTask,
}: GetTextSubmitButtonType): string => {
  if (id) {
    return editableTask
      ? i18next.t(`${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.buttons.update`)
      : i18next.t(`${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.buttons.edit`);
  }

  return i18next.t(`${APP_NAMESPACE}:${PAGE_SUB_NAMESPACE}.buttons.save`);
};
