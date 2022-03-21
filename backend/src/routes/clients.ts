import { Router } from 'express'

import { parseJSON } from './index'

const router = Router()

router.get('/') // get all clients
router.post('/', parseJSON) // create clients
router.get('/:clientId') // get target users pets
router.put('/:clientId', parseJSON) // update target client
router.delete('/:clientId') // get target users

router.get('/:clientId/pets') // get target users pets
router.post('/:clientId/pets') // create target client pets
router.get('/:clientId/pets/:petId') // get target users pets
router.put('/:clientId/pets/:petId') // update target client pets
router.delete('/:clientId/pets/:petId') // delete target users pets

router.get('/:clientId/pets/history/') // get target users pets
router.post('/:clientId/pets/history/') // create target client pets
router.get('/:clientId/pets/:petId/history/:historyId') // get target users pets
router.put('/:clientId/pets/:petId/history/:historyId') // update target client pets
router.delete('/:clientId/pets/:petId/history/:historyId') // delete target users pets

export default router
