const express = require('express');
const {
  contactInfoCreateController,
  contactInfoUpdateController,
} = require('../../controllers/contact-info');

const contactInfoRouter = express.Router();

contactInfoRouter.post('/', contactInfoCreateController);
contactInfoRouter.put('/', contactInfoUpdateController);

module.exports.contactInfoRouter = contactInfoRouter;
