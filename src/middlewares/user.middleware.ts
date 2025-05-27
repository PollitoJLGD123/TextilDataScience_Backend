import { Response, NextFunction } from 'express';
import { userSchema } from '../validators/user.validator';
import { UserRequest } from '../types/user.type';

export const validateUser = (req: UserRequest, res: Response, next: NextFunction) => {

    const { error } = userSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            success: false,
            message: 'Datos incorrectos',
            error
        });
    }

    next();
};