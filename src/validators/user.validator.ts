import joi from 'joi';

export const userSchema = joi.object({
    nombre: joi.string().required(),
    apellido: joi.string().required(),
    email: joi.string().email().required(),
    telefono: joi.string().required(),
    direccion: joi.string().required(),
    dni: joi.string().required(),
    password: joi.string().required()
});