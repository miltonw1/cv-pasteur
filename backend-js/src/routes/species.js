const { Router } = require('express')

const schemas = require('../schemas')
const SpeciesController = require('../controllers/speciesController')
// import { getModel } from '../middlewares/getModel.js'

const router = Router()

router.get('/', SpeciesController.list) // get all species

router.post('/', schemas.speciesSchema, SpeciesController.create) // create species

router.get('/:speciesId', SpeciesController.get) // get target species

router.put('/:speciesId', schemas.speciesSchema, SpeciesController.update) // get target species

router.delete('/:speciesId', SpeciesController.remove) // get target species

module.exports = router
