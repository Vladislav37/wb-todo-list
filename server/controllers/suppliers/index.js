const { supplierModel } = require('../../models/suppliers');

const deleteUserFromSupplierController = async (req, res) => {
  const {
    id,
    params: { deletedUserID },
  } = req.body;

  await supplierModel.get('users').remove({ id: deletedUserID }).write();

  res.status(200).json({
    jsonrpc: '2.0',
    result: {},
    id,
  });
};

const sendEmailInviteController = async (req, res) => {
  res.status(200).json({
    jsonrpc: '2.0',
    result: {},
    id: req.body.id,
  });
};

const getExtendedSupplierController = async (req, res) => {
  const supplier = await supplierModel.value();

  setTimeout(() => {
    res.status(200).json({
      jsonrpc: '2.0',
      result: {
        supplier,
      },
      id: req.body.id,
    });
  }, 1000);
};

module.exports = {
  deleteUserFromSupplierController,
  sendEmailInviteController,
  getExtendedSupplierController,
};
