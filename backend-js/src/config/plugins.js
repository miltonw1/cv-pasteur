const cors = require('cors')
const morgan = require('morgan')
const compression = require('compression')
const methodOverride = require('method-override')

function registerPlugins (app) {
  app.use(methodOverride('_method'))

  if (process.env.NODE_ENV !== 'production') {
    app.use(cors())
    app.use(morgan('tiny'))
  } else {
    app.use(compression())
  }

  return app
}

module.exports = { registerPlugins }
