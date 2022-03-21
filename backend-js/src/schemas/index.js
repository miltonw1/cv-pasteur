import { LoginSchema } from './loginSchema'
import { RaceSchema } from './raceSchema'
import { SpeciesSchema } from './speciesSchema'
import { ClientSchema } from './clientSchema'
import { PetSchema } from './petSchema'
import { CreateUserSchema, UpdateUserSchema } from './userSchema'

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

export default {
  login: makeMiddleware(LoginSchema),
  createUser: makeMiddleware(CreateUserSchema),
  updateUser: makeMiddleware(UpdateUserSchema),
  raceSchema: makeMiddleware(RaceSchema),
  speciesSchema: makeMiddleware(SpeciesSchema),
  clientSchema: makeMiddleware(ClientSchema),
  petSchema: makeMiddleware(PetSchema)
}
