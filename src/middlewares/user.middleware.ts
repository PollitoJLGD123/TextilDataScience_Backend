import { Response, NextFunction } from 'express';
import { userSchema } from '../validators/user.validator';
import { UserRequest } from '../types/user.type';


export const validateUser = (req: UserRequest, res: Response, next: NextFunction): void => {
    const { error } = userSchema.validate(req.body);
    if (error) {
        res.status(400).json({
            success: false,
            message: 'Datos de usuario inválidos',
            error: error.details[0].message
        });
        return;  // Solo return para salir, no retornes res
    }
    next();
};
