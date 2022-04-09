const Joi = require('joi')

const SpeciesSchema = Joi.object().keys({
  name: Joi
    .string()
    .required()
})

module.exports = { SpeciesSchema }
