/* eslint-disable no-console */

const statKeyGetController = async (req, res) => {
  console.info('statKeyController catch request', req.body);

  setTimeout(() => {
    res.status(200).json({
      error: false,
      errorText: '',
      additionalErrors: null,
      data: {
        id: '1',
        key: 'key',
        key64: 'key64',
      },
    });
  }, 1000);
};

module.exports = {
  statKeyGetController,
};
