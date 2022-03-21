import Joi from 'joi'

export const LoginSchema = Joi.object().keys({
    password: Joi
        .string()
        .required(),

    username: Joi
        .string()
        .required(),
})
