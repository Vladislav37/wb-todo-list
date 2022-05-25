const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const dataJSONFilePath = path.join(
  'server',
  'models',
  'suppliers',
  'data.json',
);
const adapter = new FileSync(dataJSONFilePath);
const database = low(adapter);

// Set some defaults
database
  .defaults({
    supplier: {
      id: 'c8ab1e82-afb5-464e-9c84-dc6b311da0e7',
      approved: true,
      country: {
        value: 'ru-RU',
      },
      invites: [
        {
          id: 'invite_2',
          user: {
            phone: '+79999788262',
            patronymic: 'Тестович',
            email: 'test.com1',
            firstName: 'c',
            secondName: 'Тестов',
            id: 21,
            me: false,
          },
        },
        {
          id: 'invite_3',
          user: {
            phone: '+79999788263',
            patronymic: 'Тестович',
            email: 'test.com2',
            firstName: 'b',
            secondName: 'Тестов',
            id: 11,
            me: false,
          },
        },
        {
          id: 'invite_4',
          user: {
            phone: '+79999788264',
            patronymic: 'Test',
            email: 'test.com3',
            firstName: 'a',
            secondName: 'Test',
            id: 12,
            me: false,
          },
        },
      ],
      users: [
        {
          phone: '+79999788261',
          patronymic: 'Тестович',
          email: 'test.com',
          firstName: 'Тест',
          secondName: 'Тестов',
          id: 11,
          me: true,
          isOwner: false,
          isAdmin: true,
        },
        {
          phone: '+79999788261',
          patronymic: 'Test',
          email: 'test.com',
          firstName: 'Test',
          secondName: 'Test',
          id: 12,
          me: false,
          isOwner: false,
          isAdmin: true,
        },
        {
          phone: '+79999788261',
          patronymic: 'Test',
          email: 'test.com',
          firstName: 'Test',
          secondName: 'Test',
          id: 12,
          me: false,
          isOwner: false,
          isAdmin: false,
        },
      ],
    },
  })
  .write();

module.exports.supplierModel = database.get('supplier');
