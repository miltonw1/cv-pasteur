const Species = require('../database/models/species')
const genericController = require('./GenericCrudController')

const crudActions = genericController(Species, 'speciesId')

module.exports = crudActions
