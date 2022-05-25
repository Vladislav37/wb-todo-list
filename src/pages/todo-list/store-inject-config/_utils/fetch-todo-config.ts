import { getTodoListRequest } from '@/api/requests/todo';
import { fetchTodoListAction } from '@/_redux/todo/actions';

export const fetchTodoConfig = {
  request: getTodoListRequest,
  actionSuccess: fetchTodoListAction,
};
