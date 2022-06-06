import { IRequestParams } from '@mihanizm56/fetch-api';
import { TodoType } from '@/pages/todo-list/_types';
import { updateTodoItemEndpoint } from '@/api/endpoints/todo';
import { responseSchema } from './response-schema';

export const makeRequestConfig = (item: TodoType): IRequestParams => ({
  endpoint: updateTodoItemEndpoint,
  body: {
    ...item,
  },
  responseSchema,
});
