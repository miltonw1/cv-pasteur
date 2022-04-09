const Race = require('../database/models/race')
const genericController = require('./GenericCrudController')

const crudActions = genericController(Race, 'raceId')

module.exports = crudActions
