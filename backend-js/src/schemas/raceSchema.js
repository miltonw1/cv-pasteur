const Joi = require('joi')

const RaceSchema = Joi.object().keys({
  name: Joi
    .string()
    .required(),

  species_id: Joi
    .number()
    .required()
})

module.exports = { RaceSchema }
