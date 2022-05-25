/* eslint-disable no-console */
const { contactInfo } = require('./data');

module.exports.contactInfoCreateController = (req, res) => {
  console.info('contactInfoCreateController get request', req.body);
  const newContactInfo = req.body.contactInfo;

  Object.keys(newContactInfo).forEach((key) => {
    contactInfo[key] = newContactInfo[key];
  });

  contactInfo.id = `${new Date()}`;

  res.status(200).json({
    error: null,
    errorText: '',
    data: { contactInfo },
    additionalErrors: null,
  });
};

module.exports.contactInfoUpdateController = (req, res) => {
  console.info('contactInfoUpdateController get request', req.body);
  const newContactInfo = req.body.contactInfo;

  Object.keys(newContactInfo).forEach((key) => {
    contactInfo[key] = newContactInfo[key];
  });

  res.status(200).json({
    error: null,
    errorText: '',
    data: {},
    additionalErrors: null,
  });
};
