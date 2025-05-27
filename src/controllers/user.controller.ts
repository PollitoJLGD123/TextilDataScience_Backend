import { Response } from 'express';
import { UserRequest } from '../types/user.type';
import { User } from '../models/user.model'; // Ajusta según tu modelo ORM
import { userSchema } from '../validators/user.validator';

export class UserController {
    static async create(req: UserRequest, res: Response): Promise<void> {
        const { error } = userSchema.validate(req.body);
        if (error) {
            res.status(400).json({ error: error.details[0].message });
            return;
        }
        try {
            const user = await User.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el usuario' });
        }
    }

    static async getAll(_req: UserRequest, res: Response): Promise<void> {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener usuarios' });
        }
    }

    static async getById(req: UserRequest, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const user = await User.findByPk(id);
            if (!user) {
                res.status(404).json({ error: 'Usuario no encontrado' });
                return;
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener usuario' });
        }
    }

    static async update(req: UserRequest, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const [updated] = await User.update(req.body, { where: { id_user: id } });
            if (updated === 0) {
                res.status(404).json({ error: 'Usuario no encontrado' });
                return;
            }
            const userUpdated = await User.findByPk(id);
            res.json(userUpdated);
        } catch (error) {
            res.status(500).json({ error: `Error al actualizar usuario` });
        }
    }


    static async delete(req: UserRequest, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const deleted = await User.destroy({ where: { id_user: id } });
            if (deleted === 0) {
                res.status(404).json({ error: 'Usuario no encontrado' });
                return;
            }
            res.status(200).json({ message: 'Usuario eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar usuario' });
        }
    }

}
