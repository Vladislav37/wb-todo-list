/* eslint-disable no-console */
const { legalFormsData } = require('./data');

const legalFormsGetController = (req, res) => {
  console.info('legalAddressGetController get request');

  res.status(200).json({
    error: false,
    errorText: '',
    data: legalFormsData,
    additionalErrors: null,
  });
};

const legalFormsPostController = (req, res) => {
  console.info('legalAddressPostController post request', req.body);
  const { legalAddress } = req.body;

  setTimeout(() => {
    res.status(200).json({
      error: false,
      errorText: '',
      data: {
        legalAddress,
      },
      additionalErrors: null,
    });
  }, 100);
};

module.exports = {
  legalFormsGetController,
  legalFormsPostController,
};
