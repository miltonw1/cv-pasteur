const { LoginSchema } = require('./loginSchema')
const { RaceSchema } = require('./raceSchema')
const { SpeciesSchema } = require('./speciesSchema')
const { ClientSchema } = require('./clientSchema')
const { PetSchema } = require('./petSchema')
const { CreateUserSchema, UpdateUserSchema } = require('./userSchema')

function makeMiddleware (schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body)

    if (!error) {
      return next()
    }

    return res.status(422).json({
      message: 'Invalid request',
      errors: error.details
    })
  }
}

module.exports = {
  login: makeMiddleware(LoginSchema),
  createUser: makeMiddleware(CreateUserSchema),
  updateUser: makeMiddleware(UpdateUserSchema),
  raceSchema: makeMiddleware(RaceSchema),
  speciesSchema: makeMiddleware(SpeciesSchema),
  clientSchema: makeMiddleware(ClientSchema),
  petSchema: makeMiddleware(PetSchema)
}
