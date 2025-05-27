import { Response, NextFunction } from 'express';
import { horarioSchema } from '../validators/horario.validator';
import { HorarioRequest } from '../types/horario.type';

export const validateHorario = (req: HorarioRequest, res: Response, next: NextFunction): void => {
    const { error } = horarioSchema.validate(req.body);
    if (error) {
        res.status(400).json({
            success: false,
            message: 'Datos de horario inválidos',
            error: error.details[0].message
        });
        return;
    }
    next();
};
