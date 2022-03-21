import Joi from 'joi'

export const RaceSchema = Joi.object().keys({
  name: Joi
    .string()
    .required(),

  species_id: Joi
    .number()
    .required()
})
