import { Request, Response, NextFunction } from 'express';
import { empleadoSchema } from '../validators/empleado.validator';
import { EmpleadoRequest } from '../types/empleado.type';

export const validateEmpleado = (req: EmpleadoRequest, res: Response, next: NextFunction): void => {
    const { error } = empleadoSchema.validate(req.body);

    if (error) {
        res.status(400).json({
            success: false,
            message: 'Datos de empleado inválidos',
            error: error.details[0].message
        });
        return;
    }

    next();
};
