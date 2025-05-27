import { Response, NextFunction } from 'express';
import { nominaSchema } from '../validators/nomina.validator';
import { NominaRequest } from '../types/nomina.type';

export const validateNomina = (req: NominaRequest, res: Response, next: NextFunction): void => {
    const { error } = nominaSchema.validate(req.body);
    if (error) {
        res.status(400).json({
            success: false,
            message: 'Datos de nómina inválidos',
            error: error.details[0].message
        });
        return;
    }
    next();
};
