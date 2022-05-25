const fullInfoGetController = (req, res) => {
  const { info } = require('./data'); // eslint-disable-line

  // eslint-disable-next-line no-console
  console.info('fullInfoGetController get request');

  res
    .status(200)
    .json({ error: false, errorText: '', data: info, additionalErrors: null });
};

module.exports = {
  fullInfoGetController,
};
