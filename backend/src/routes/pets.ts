import { Router } from 'express'

const router = Router()

router.get('/') // get all pets
router.post('/') // create pets
router.get('/:petId') // get target users pets
router.put('/:petId') // update target pet
router.delete('/:petId') // delete target users pet

router.get('/history/') // get target users pets
router.post('/history/') // create target client pets
router.get('/:petId/history/:historyId') // get target users pets
router.put('/:petId/history/:historyId') // update target client pets
router.delete('/:petId/history/:historyId') // delete target users pets

export default router
