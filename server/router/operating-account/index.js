const express = require('express');
const {
  operatingAccountGetController,
  operatingAccountPostController,
} = require('../../controllers/operating-account');

const operatingAccountRouter = express.Router();

operatingAccountRouter.get('/', operatingAccountGetController);
operatingAccountRouter.post('/', operatingAccountPostController);
operatingAccountRouter.put('/', operatingAccountPostController);

module.exports.operatingAccountRouter = operatingAccountRouter;
