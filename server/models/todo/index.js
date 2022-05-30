const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const dataJSONFilePath = path.join('server', 'models', 'todo', 'data.json');
const adapter = new FileSync(dataJSONFilePath);
const database = low(adapter);

// Set some defaults
database.defaults([]).write();

module.exports.todoModel = database; // .get('todos');
