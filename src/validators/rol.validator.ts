import joi from 'joi';

export const rolSchema = joi.object({
    nombre: joi.string().max(100).required() // STRING(100) y obligatorio
});