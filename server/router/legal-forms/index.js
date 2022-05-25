const express = require('express');
const {
  legalFormsPostController,
  legalFormsGetController,
} = require('../../controllers/legal-forms');

const legalFormsRouter = express.Router();

legalFormsRouter.get('/', legalFormsGetController);
legalFormsRouter.post('/', legalFormsPostController);

module.exports.legalFormsRouter = legalFormsRouter;
