const bodyParser = require('body-parser')

// body parser. Recieve the client request and parse it into a handly json format
const parseJSON = bodyParser.json({
  strict: true
})

module.exports = { parseJSON }
