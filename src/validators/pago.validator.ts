// src/validators/pago.validator.ts
import joi from 'joi';

export const pagoSchema = joi.object({
    fecha_pago: joi.date().required(),
    monto: joi.number().precision(2).required(),
    metodo_pago: joi.string().max(50).required(),
    id_nomina: joi.number().integer().required()
});
