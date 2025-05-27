// src/validators/horario.validator.ts
import joi from 'joi';

export const horarioSchema = joi.object({
    hora_inicio: joi.string().required(),
    hora_fin: joi.string().required(),
    dias: joi.string().max(50).required(),
    id_empleado: joi.number().integer().required()
});
