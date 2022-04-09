const History = require('../database/models/history')
const genericController = require('./GenericCrudController')

const crudActions = genericController(History, 'historyId')

module.exports = crudActions
