const express = require('express')

require('dotenv/config') // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

const { registerPlugins } = require('./plugins')
const { registerRoutes } = require('../routes')

require('./session')

function setup () {
  // express app created
  // let app =

  // registering global middlewares in the express app
  // app = registerPlugins(app)

  return registerRoutes(registerPlugins(express()))
}

module.exports = { setup }
