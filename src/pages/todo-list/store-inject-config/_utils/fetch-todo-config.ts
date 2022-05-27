import { getTodoListRequest } from '@/api/requests/todo';
import { fetchTodoListAction } from '@/_redux/todo/actions';

// return type
export const fetchTodoConfig = {
  request: getTodoListRequest,
  actionSuccess: fetchTodoListAction,
  // loading satrt/stop
  // error action(s)
};
