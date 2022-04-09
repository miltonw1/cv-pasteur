const Joi = require('joi')

const ClientSchema = Joi.object().keys({
  name: Joi
    .string()
    .required(),

  phone: Joi
    .string()
    .required(),

  email: Joi
    .string()
    .required()
    .email(),

  address: Joi
    .string()
    .required(),

  city: Joi
    .string()
    .required(),

  debt: Joi.string()
})

module.exports = { ClientSchema }
