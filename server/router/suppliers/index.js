const express = require('express');
const {
  addUserToSupplierController,
  updateUserController,
  deleteInviteUserController,
  changeUserRoleController,
  changeOwnerAssingController,
} = require('../../controllers/users');
const {
  deleteUserFromSupplierController,
  sendEmailInviteController,
  getExtendedSupplierController,
} = require('../../controllers/suppliers');

const suppliersRouter = express.Router();

// supliers
suppliersRouter.post('/getExtendedSupplier', getExtendedSupplierController);
suppliersRouter.post(
  '/deleteUserFromSupplier',
  deleteUserFromSupplierController,
);

// users
suppliersRouter.post('/addUserToSupplier', addUserToSupplierController);
suppliersRouter.post('/updateUser', updateUserController);
suppliersRouter.post('/sendEmailInvite', sendEmailInviteController);
suppliersRouter.post('/deleteInvite', deleteInviteUserController);
suppliersRouter.post('/ownerAssign', changeOwnerAssingController);
suppliersRouter.post('/changeUserRole', changeUserRoleController);

module.exports.suppliersRouter = suppliersRouter;
