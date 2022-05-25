const express = require('express');
const { statKeyGetController } = require('../../controllers/stat-key');

const statkeyRouter = express.Router();

statkeyRouter.get('/', statKeyGetController);

module.exports.statkeyRouter = statkeyRouter;
