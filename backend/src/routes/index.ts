import { Router, Express } from 'express'
import bodyParser from 'body-parser'

// import usersRouter from './users'
// import clientsRouter from './clients'
import speciesRouter from './species'
// import petsRouter from './pets'



import * as exampleController from '../controllers/exampleController'

// body parser. Recieve the client request and parse it into a handly json format
export const parseJSON = bodyParser.json({
    strict: true
})

const routes = Router()

routes.get('/', exampleController.helloWorld)

routes.post('/login')
routes.get('/profile')

// routes.use('/clients', clientsRouter)
// routes.use('/pets', petsRouter)
routes.use('/species', parseJSON, speciesRouter)
// routes.use('/users', parseJSON, usersRouter)

/**
 * Register all the API routes on the application
 */
export function registerRoutes (app: Express): Express {
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
