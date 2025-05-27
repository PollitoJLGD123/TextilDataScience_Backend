import { Response, NextFunction } from 'express';
import { contratoSchema } from '../validators/contrato.validator';
import { ContratoRequest } from '../types/contrato.type';

export const validateContrato = (req: ContratoRequest, res: Response, next: NextFunction): void => {
    const { error } = contratoSchema.validate(req.body);
    if (error) {
        res.status(400).json({
            success: false,
            message: 'Datos de contrato inválidos',
            error: error.details[0].message
        });
        return;
    }
    next();
};
