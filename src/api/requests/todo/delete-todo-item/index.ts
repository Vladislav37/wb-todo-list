import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import { makeRequestConfig } from './make-request-config';

export const deleteTodoItemRequest = (id: string): Promise<IResponse> =>
  new RestRequest().postRequest(makeRequestConfig(id));
