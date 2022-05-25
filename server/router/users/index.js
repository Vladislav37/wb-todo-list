const express = require('express');
const { findUserByPhoneController } = require('../../controllers/users');

const usersRouter = express.Router();

// supliers
usersRouter.post('/findUserByPhone', findUserByPhoneController);

module.exports.usersRouter = usersRouter;
