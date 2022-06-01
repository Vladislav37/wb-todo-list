const express = require('express');
const { i18nNamespacesController } = require('../../controllers/i18n');

const i18nRouter = express.Router();

i18nRouter.use('/:namespace/:locale', i18nNamespacesController);

module.exports.i18nRouter = i18nRouter;
