/* eslint-disable no-console */
const { operatingAccountData } = require('./data');

const operatingAccountGetController = (req, res) => {
  console.info('operatingAccountGetController get request');

  res.status(200).json({
    error: false,
    errorText: '',
    data: operatingAccountData,
    additionalErrors: null,
  });
};

const operatingAccountPostController = (req, res) => {
  console.info('operatingAccountPostController post/put request');
  const { operatingAccount, bik } = req.body;

  setTimeout(() => {
    res.status(200).json({
      error: false,
      errorText: '',
      data: {
        operatingAccount,
        bik,
        state: 1,
        syncStatus: '0',
        syncErrorComment: '',
      },
      additionalErrors: null,
    });
  }, 2000);
};

module.exports = {
  operatingAccountGetController,
  operatingAccountPostController,
};
