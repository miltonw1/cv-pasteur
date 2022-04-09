const { Router } = require('express')

const router = Router()

const PetController = require('../controllers/petController')

router.get('/', PetController.list) // get all pets
router.post('/', PetController.create) // create pets
router.get('/:petId', PetController.get) // get target users pets
router.put('/:petId', PetController.update) // update target pet
router.delete('/:petId', PetController.remove) // delete target users pet

router.get('/history/') // get target users pets
router.post('/history/') // create target client pets
router.get('/:petId/history/:historyId') // get target users pets
router.put('/:petId/history/:historyId') // update target client pets
router.delete('/:petId/history/:historyId') // delete target users pets

module.exports = router
