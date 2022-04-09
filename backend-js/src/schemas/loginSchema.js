const Joi = require('joi')

const LoginSchema = Joi.object().keys({
  password: Joi
    .string()
    .required(),

  username: Joi
    .string()
    .required()
})

module.exports = { LoginSchema }
