import express, { Express } from 'express'

import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

import { registerPlugins } from './plugins'
import { registerRoutes } from '../routes'

import './session'

export function setup (): Express {
    // express app created
    // let app =

    // registering global middlewares in the express app
    // app = registerPlugins(app)

    return registerRoutes(registerPlugins(express()))
}
