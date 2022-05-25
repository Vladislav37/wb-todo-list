module.exports.legalFormsData = [
  {
    current: false,
    id: 12,
    name: 'ИП без НДС',
    kpp: false,
    legalForm: true,
    ogrnip: true,
    general: true,
    fullName: true,
    transferBIC: true,
    transferCorrespondentAccount: true,
    transferBankINN: true,
    rules: {
      bik: {
        regExp: '^\\d{1,3}$',
      },
    },
  },
  {
    current: true,
    id: 11,
    name: 'ИП с НДС',
    kpp: false,
    legalForm: true,
    ogrnip: true,
    general: false,
    fullName: true,
    rules: {
      fullName: {
        regExp: '^\\d{1,2}$',
      },
    },
  },
  {
    current: true,
    id: 16,
    name: 'Самозанятый',
    kpp: false,
    legalForm: true,
    fullName: true,
    ogrnip: false,
    general: true,
    rules: {
      bik: {
        regExp: '^\\d{1,4}$',
      },
    },
  },
];
