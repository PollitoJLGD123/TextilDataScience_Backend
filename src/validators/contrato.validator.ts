// src/validators/contrato.validator.ts
import joi from 'joi';

export const contratoSchema = joi.object({
    fecha_inicio: joi.date().required(),
    fecha_fin: joi.date().required(),
    sueldo: joi.number().precision(2).required(),
    tipo_contrato: joi.string().max(50).required(),
    id_empleado: joi.number().integer().required()
});
