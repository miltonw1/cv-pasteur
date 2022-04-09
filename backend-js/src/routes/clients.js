const { Router } = require('express')

const ClientController = require('../controllers/clientController')
// const { parseJSON } = require('./_utils')
const schemas = require('../schemas')
// const getModel = require('../middlewares/getModel')
// const Client = require('../database/models/client')

const router = Router()

// const getClientFromDB = getModel({ model: Client, resourceName: 'client', routeKey: 'clientId' })

// console.log({ parseJSON: parseJSON.toString() })

router.get('/', ClientController.list) // get all clients
router.post('/', schemas.clientSchema, ClientController.create) // create clients
router.get('/:clientId', ClientController.get) // get target users pets
router.put('/:clientId', schemas.clientSchema, ClientController.update) // update target client
router.delete('/:clientId', ClientController.remove) // get target users

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

module.exports = router
