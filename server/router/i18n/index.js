const express = require('express');
const { i18nController } = require('../../controllers/i18n');

const i18nRouter = express.Router();

i18nRouter.use('/', i18nController);

module.exports.i18nRouter = i18nRouter;
