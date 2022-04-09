const Pet = require('../database/models/pet')
const genericController = require('./GenericCrudController')

const crudActions = genericController(Pet, 'petId')

module.exports = crudActions
