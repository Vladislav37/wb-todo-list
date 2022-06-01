/* eslint-disable no-console */
const translateRu = require('./ru.json');
const translateEn = require('./en.json');

const dict = {
  en: translateEn,
  ru: translateRu,
};

const i18nNamespacesController = async (req, res) => {
  const { locale } = req.params;

  // eslint-disable-next-line no-console
  console.info('i18nNamespacesController catch request', locale);

  const translate = dict[locale];

  res.status(200).json({ translate });
};

module.exports = {
  i18nNamespacesController,
};
