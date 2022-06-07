import { IRequestParams } from '@mihanizm56/fetch-api';
import { deleteTodoItemEndpoint } from '@/api/endpoints/todo';
import { responseSchema } from './response-schema';

export const makeRequestConfig = (id: string): IRequestParams => ({
  endpoint: deleteTodoItemEndpoint,
  body: {
    id,
  },
  responseSchema,
});
