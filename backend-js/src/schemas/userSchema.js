const Joi = require('joi')

const CreateUserSchema = Joi.object().keys({
  name: Joi
    .string()
    .required(),

  username: Joi
    .string()
    .required(),

  email: Joi
    .string()
    .required()
    .email(),

  password: Joi
    .string()
    .required(),

  password_confirm: Joi.ref('password')
})

const UpdateUserSchema = Joi.object().keys({
  name: Joi
    .string()
    .required(),

  username: Joi
    .string()
    .required(),

  email: Joi
    .string()
    .required()
    .email()
})

module.exports = { CreateUserSchema, UpdateUserSchema }
