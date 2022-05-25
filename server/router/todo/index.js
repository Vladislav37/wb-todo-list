const express = require('express');
const {
  getTodoListController,
  createTodoItemController,
  deleteTodoItemController,
  updateTodoItemController,
} = require('../../controllers/todo');

const todoRouter = express.Router();

todoRouter.get('/getTodoList', getTodoListController);
todoRouter.post('/createTodoItem', createTodoItemController);
todoRouter.post('/deleteTodoItem', deleteTodoItemController);
todoRouter.post('/updateTodoItem', updateTodoItemController);

module.exports.todoRouter = todoRouter;
