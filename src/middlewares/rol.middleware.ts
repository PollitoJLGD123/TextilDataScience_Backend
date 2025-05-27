import { Response, NextFunction } from 'express';
import { rolSchema } from '../validators/rol.validator';
import { RolRequest } from '../types/rol.type';

export const validateRol = (req: RolRequest, res: Response, next: NextFunction): void => {
    const { error } = rolSchema.validate(req.body);

    if (error) {
        res.status(400).json({
            success: false,
            message: 'Datos de rol inválidos',
            error: error.details[0].message
        });
        return;
    }

    next();
};
