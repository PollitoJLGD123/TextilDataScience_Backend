// src/validators/nomina.validator.ts
import joi from 'joi';

export const nominaSchema = joi.object({
    mes: joi.number().integer().min(1).max(12).required(),
    year: joi.number().integer().required(),
    total: joi.number().precision(2).required(),
    id_empleado: joi.number().integer().required()
});
