const { nanoid } = require('nanoid');
const { todoModel } = require('../../models/todo');

const getTodoListController = async (req, res) => {
  const todos = await todoModel.value();

  setTimeout(() => {
    res.status(200).json({
      error: false,
      errorText: '',
      additionalErrors: [],
      data: todos,
    });
  }, 1000);
};

const createTodoItemController = async (req, res) => {
  const { name, description, isLoading } = req.body;

  const newId = nanoid(5);

  await todoModel
    .push({
      id: newId,
      name,
      description,
      isLoading,
    })
    .write();

  res.status(200).json({
    error: false,
    errorText: '',
    additionalErrors: [],
    data: {
      id: newId,
      name,
      description,
      isLoading,
    },
  });
};

const updateTodoItemController = async (req, res) => {
  const { id, name, description, isLoading } = req.body;

  await todoModel.find({ id }).assign({ name, description }).write();

  res.status(200).json({
    error: false,
    errorText: '',
    additionalErrors: [],
    data: {
      id,
      name,
      description,
      isLoading,
    },
  });
};

const deleteTodoItemController = async (req, res) => {
  const { id } = req.body;

  await todoModel.remove({ id }).write();

  res.status(200).json({
    error: false,
    errorText: '',
    additionalErrors: [],
    data: {
      id,
    },
  });
};

module.exports = {
  getTodoListController,
  createTodoItemController,
  updateTodoItemController,
  deleteTodoItemController,
};
