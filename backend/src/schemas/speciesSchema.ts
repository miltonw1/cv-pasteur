import Joi from 'joi'

export const SpeciesSchema = Joi.object().keys({
    name: Joi
        .string()
        .required(),
})
