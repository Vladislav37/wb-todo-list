import { createTodoItemEndpoint } from '@/api/endpoints/todo';
import { TodoType } from '@/pages/todo-list/_types';
import { responseSchema } from './response-schema';

export const makeRequestConfig = (item: TodoType) => ({
  endpoint: createTodoItemEndpoint,
  body: item,
  responseSchema,
});
