const { Router } = require('express')
const bodyParser = require('body-parser')

// const usersRouter = require('./users')
// const clientsRouter = require('./clients')
const speciesRouter = require('./species')
// const petsRouter = require('./pets')

const exampleController = require('../controllers/exampleController')

// body parser. Recieve the client request and parse it into a handly json format
const parseJSON = bodyParser.json({
  strict: true
})

/**
 * Register all the API routes on the application
 */
function registerRoutes (app) {
  const routes = Router()

  routes.get('/', exampleController.helloWorld)

  routes.post('/login')
  routes.get('/profile')

  // routes.use('/clients', clientsRouter)
  // routes.use('/pets', petsRouter)
  routes.use('/species', parseJSON, speciesRouter)
  // routes.use('/users', parseJSON, usersRouter)

  app.use(routes)

  /*
    /clients
    /clients/{client}
    /clients/{client}/pets
    /clients/{client}/pets/{pet}

    /pets
    /pets/{pet}

    /species
    /species/{specie}

    /users
    /users/{user}

    /login
  */

  return app
}

module.exports = {
  parseJSON,
  registerRoutes
}
