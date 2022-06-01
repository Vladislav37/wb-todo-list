import { IResponse, RestRequest } from '@mihanizm56/fetch-api';
import Joi from 'joi';
// import { TodoType } from '@/_redux/todo';

export const getTodoListRequest = (): Promise<IResponse> => {
  return new RestRequest().getRequest({
    endpoint: 'http://localhost:8081/todo/getTodoList',
    responseSchema: Joi.object({
      todos: Joi.array().items(
        Joi.object({
          id: Joi.string().required(),
          name: Joi.string().required(),
          description: Joi.string().required(),
        }),
      ),
    }),
  });
};

export const createTodoItemRequest = (item): Promise<IResponse> => {
  return new RestRequest().postRequest({
    endpoint: 'http://localhost:8081/todo/createTodoItem',
    body: {
      ...item,
    },
    responseSchema: Joi.object({
      id: Joi.string().required(),
      name: Joi.string().required(),
      description: Joi.string().required(),
    }),
  });
};

export const updateTodoItemRequest = (item): Promise<IResponse> => {
  return new RestRequest().postRequest({
    endpoint: 'http://localhost:8081/todo/updateTodoItem',
    body: {
      ...item,
    },
    responseSchema: Joi.object({
      id: Joi.string().required(),
      name: Joi.string().required(),
      description: Joi.string().required(),
    }),
  });
};

export const deleteTodoItemRequest = (id: string): Promise<IResponse> => {
  return new RestRequest().postRequest({
    endpoint: 'http://localhost:8081/todo/deleteTodoItem',
    body: {
      id,
    },
    responseSchema: Joi.object({
      id: Joi.string().required(),
    }),
  });
};
