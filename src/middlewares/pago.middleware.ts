import { Response, NextFunction } from 'express';
import { pagoSchema } from '../validators/pago.validator';
import { PagoRequest } from '../types/pago.type';

export const validatePago = (req: PagoRequest, res: Response, next: NextFunction): void => {
    const { error } = pagoSchema.validate(req.body);
    if (error) {
        res.status(400).json({
            success: false,
            message: 'Datos de pago inválidos',
            error: error.details[0].message
        });
        return;
    }
    next();
};
