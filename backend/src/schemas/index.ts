import { Request, Response, NextFunction } from 'express'
import { ObjectSchema } from 'joi'

import { LoginSchema } from './loginSchema'
import { RaceSchema } from './raceSchema'
import { SpeciesSchema } from './speciesSchema'
import { ClientSchema } from './clientSchema'
import { PetSchema } from './petSchema'
import { CreateUserSchema, UpdateUserSchema } from './userSchema'

function makeMiddleware (schema: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body);

        if (!error) {
            return next()
        }

        return res.status(422).json({
            message: 'Invalid request',
            errors: error.details,
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
