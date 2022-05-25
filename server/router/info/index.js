const express = require('express');
const { fullInfoGetController } = require('../../controllers/info');

const fullInfoRouter = express.Router();

fullInfoRouter.get('/', fullInfoGetController);

module.exports.fullInfoRouter = fullInfoRouter;
