// src/validators/asistencia.validator.ts
import joi from 'joi';

export const asistenciaSchema = joi.object({
    fecha: joi.date().required(),
    hora_entrada: joi.string().required(), // formato HH:mm:ss
    hora_salida: joi.string().required(),
    id_empleado: joi.number().integer().required()
});
