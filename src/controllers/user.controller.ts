
import { Response } from 'express';
import { User } from '../models/user.model';
import { UserRequest } from '../types/user.type';

export const createUser = async (req: UserRequest, res: Response) => {
    try {
        await User.create(req.body);
        res.status(201).json({
            success: true,
            message: 'Usuario creado exitosamente',
            data: req.body
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al crear usuario',
            error
        });
    }
};