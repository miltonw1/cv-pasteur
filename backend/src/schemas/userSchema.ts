import Joi from 'joi'

export const CreateUserSchema = Joi.object().keys({
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

export const UpdateUserSchema = Joi.object().keys({
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
})
