import { IRequestParams } from '@mihanizm56/fetch-api';
import { requestTranslateFunction } from '@/_constants/i18next/i18next-constants';
import { getTodoListEndpoint } from '@/api/endpoints/todo';
import { responseSchema } from './response-schema';

export const makeRequestConfig = (): IRequestParams => ({
  endpoint: getTodoListEndpoint,
  responseSchema,
  translateFunction: requestTranslateFunction,
});
