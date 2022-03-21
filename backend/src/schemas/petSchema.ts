import Joi from 'joi'


export const PetSchema = Joi.object().keys({
    name: Joi
        .string()
        .required(),

    allergies: Joi
        .string(),

    genre: Joi
        .string()
        .valid('male', 'female', ''),
        // empty string could be parsed as a null value in the controller

    birthday: Joi
        .date()
        .iso(),

    donor: Joi
        .boolean()
        .required(),

    blood_type: Joi
        .string()
        .required(),

    status: Joi
        .string()
        .required()
        .valid('dead', 'alive'),

    debt: Joi.string(),

    species_id: Joi
        .number()
        .required(),

    client_id: Joi
        .number()
        .required(),

    race_id: Joi
        .number(),
})
