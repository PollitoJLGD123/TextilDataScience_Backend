import { Response, NextFunction } from 'express';
import { asistenciaSchema } from '../validators/asistencia.validator';
import { AsistenciaRequest } from '../types/asistencia.type';

export const validateAsistencia = (req: AsistenciaRequest, res: Response, next: NextFunction): void => {
    const { error } = asistenciaSchema.validate(req.body);
    if (error) {
        res.status(400).json({
            success: false,
            message: 'Datos de asistencia inválidos',
            error: error.details[0].message
        });
        return;
    }
    next();
};
