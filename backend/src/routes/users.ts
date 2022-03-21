import { Router } from 'express'

const router = Router()

router.get('/') // get all users
router.post('/') // create user
router.get('/:userId') // get target users
router.put('/:userId') // get target users
router.delete('/:userId') // get target users

export default router
