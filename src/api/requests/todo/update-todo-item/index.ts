import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { TodoType } from '@/pages/todo-list/_types';
import { makeRequestConfig } from './make-request-config';

export const updateTodoItemRequest = (item: TodoType): Promise<IResponse> =>
  new RestRequest().postRequest(makeRequestConfig(item));
