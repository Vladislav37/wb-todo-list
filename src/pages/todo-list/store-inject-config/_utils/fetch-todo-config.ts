import { InitLoadManagerRequestOptionsType } from '@mihanizm56/redux-core-modules';
import { getTodoListRequest } from '@/api/requests/todo';
import {
  fetchTodoListAction,
  startCardInfoLoadingAction,
  stopCardInfoLoadingAction,
} from '@/_redux/todo/actions';

export const fetchTodoConfig: InitLoadManagerRequestOptionsType = {
  request: getTodoListRequest,
  actionSuccess: fetchTodoListAction,
  errorAction: fetchTodoListAction,
  loadingStartAction: startCardInfoLoadingAction,
  loadingStopAction: stopCardInfoLoadingAction,
};
