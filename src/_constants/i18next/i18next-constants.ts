import i18next from 'i18next';
import { APP_NAMESPACE } from '@/_constants/i18next/app-namespace';

export const backendErrorsSubnamespace = 'backend-errors';

export const requestTranslateFunction = (
  key: string,
  options?: Record<string, any> | null,
) =>
  options
    ? i18next.t(`${APP_NAMESPACE}:${backendErrorsSubnamespace}.${key}`, options)
    : i18next.t(`${APP_NAMESPACE}:${backendErrorsSubnamespace}.${key}`);
