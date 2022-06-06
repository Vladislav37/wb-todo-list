import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { makeRequestConfig } from './make-request-config';

export const createTodoItemRequest = (item): Promise<IResponse> =>
  new RestRequest().postRequest(makeRequestConfig(item));
