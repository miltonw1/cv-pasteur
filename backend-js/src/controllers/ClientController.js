const Client = require('../database/models/client')
const genericController = require('./GenericCrudController')

const crudActions = genericController(Client, 'clientId')

module.exports = crudActions
