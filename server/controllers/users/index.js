// eslint-disable-next-line
const { uniqueId } = require('lodash');
const { supplierModel } = require('../../models/suppliers');

const addUserToSupplierController = async (req, res) => {
  const {
    id,
    // params: { invitedUser },
  } = req.body;

  // const formattedInvite = {
  //   id: uniqueId('invite_'),
  //   created: new Date().toISOString(),
  //   user: { ...invitedUser, id: Number(uniqueId('')), me: false },
  //   token: uniqueId('token_'),
  // };

  // await supplierModel
  //   .get('invites')
  //   .push(formattedInvite)
  //   .write();

  res.status(200).json({
    jsonrpc: '2.0',
    result: {
      invite: {},
    },
    id,
  });
};

const deleteInviteUserController = async (req, res) => {
  const { id, params } = req.body;

  await supplierModel.get('invites').remove({ id: params.id }).write();

  res.status(200).json({
    jsonrpc: '2.0',
    result: {},
    id,
  });
};

const updateUserController = async (req, res) => {
  const {
    id,
    params: { updatedData },
  } = req.body;

  const supplier = await supplierModel.value();

  const supplierUsers = supplier.users;

  const findedUser = supplierUsers.find((user) => user.id === updatedData.id);

  if (!findedUser) {
    res.status(200).json({
      jsonrpc: '2.0',
      error: {
        code: 100500,
        message: 'user doesnt exist',
        data: {
          trKey: 'user doesnt exist',
        },
      },
      id,
    });

    return;
  }

  await supplierModel
    .get('users')
    .find({ id: findedUser.id })
    .assign(updatedData)
    .write();

  res.status(200).json({
    jsonrpc: '2.0',
    result: {},
    id,
  });
};

const findUserByPhoneController = async (req, res) => {
  const {
    id,
    params: { phone },
  } = req.body;

  const findedUser = await supplierModel
    .get('users')
    .find({ phone: `${phone}` })
    .value();

  setTimeout(() => {
    res.status(200).json({
      jsonrpc: '2.0',
      result: { user: findedUser || null },
      id,
    });
  }, 1000);
};

const changeOwnerAssingController = async (req, res) => {
  const {
    id,
    params: { newOwnerID },
  } = req.body;

  const findedUser = await supplierModel
    .get('users')
    .find({ id: newOwnerID })
    .value();

  // eslint-disable-next-line no-console
  console.log(findedUser);

  setTimeout(() => {
    res.status(200).json({
      jsonrpc: '2.0',
      result: null,
      id,
    });
  }, 1000);
};

const changeUserRoleController = async (req, res) => {
  const { id } = req.body;

  setTimeout(() => {
    res.status(200).json({
      jsonrpc: '2.0',
      result: null,
      id,
    });
  }, 1000);
};

module.exports = {
  addUserToSupplierController,
  updateUserController,
  deleteInviteUserController,
  findUserByPhoneController,
  changeUserRoleController,
  changeOwnerAssingController,
};
