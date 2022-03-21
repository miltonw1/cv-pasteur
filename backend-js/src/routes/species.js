import { Router } from 'express'
import { list, create, get, update, remove } from '../controllers/SpeciesController'
import schemas from '../schemas'
// import { getModel } from '../middlewares/getModel.js'

const router = Router()

router.get('/', list) // get all species

router.post('/', schemas.speciesSchema, create) // create species

router.get('/:speciesId', get) // get target species

router.put('/:speciesId', schemas.speciesSchema, update) // get target species

router.delete('/:speciesId', remove) // get target species

module.exports = router
