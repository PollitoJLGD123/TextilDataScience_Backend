import joi from 'joi';

export const empleadoSchema = joi.object({
    nombre: joi.string().max(50).required(), // Coincide con STRING(50)
    apellido: joi.string().max(50).required(), // Coincide con STRING(50)
    email: joi.string().email().required(), // Validación de email (como en el modelo)
    telefono: joi.string().length(9).pattern(/^[0-9]+$/).required(), // CHAR(9) y solo números
    direccion: joi.string().max(100).required(), // STRING(100)
    dni: joi.string().length(8).pattern(/^[0-9]+$/).required(), // CHAR(8) y solo números
    id_rol: joi.number().integer().positive().required(), // ForeignKey a Rol
    id_user: joi.number().integer().positive().required() // ForeignKey a User
});