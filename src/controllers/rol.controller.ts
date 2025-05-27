import { Response } from 'express';
import { Rol } from '../models/rol.model';
import { rolSchema } from '../validators/rol.validator';
import { RolRequest } from '../types/rol.type';

export class RolController {
    // Crear un nuevo rol
    static async create(req: RolRequest, res: Response): Promise<void> {
        const { error } = rolSchema.validate(req.body);
        if (error) {
            res.status(400).json({ error: error.details[0].message });
            return;
        }
        try {
            const rol = await Rol.create(req.body);
            res.status(201).json(rol);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el rol' });
        }
    }

    // Obtener todos los roles
    static async getAll(req: RolRequest, res: Response): Promise<void> {
        try {
            const roles = await Rol.findAll();
            res.json(roles);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener roles' });
        }
    }

    // Obtener un rol por ID
    static async getById(req: RolRequest, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const rol = await Rol.findByPk(id);
            if (!rol) {
                res.status(404).json({ error: 'Rol no encontrado' });
                return;
            }
            res.json(rol);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener el rol' });
        }
    }

    // Actualizar un rol
    static async update(req: RolRequest, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const [updated] = await Rol.update(req.body, { where: { id_rol: id } });
            if (updated === 0) {
                res.status(404).json({ error: 'Rol no encontrado' });
                return;
            }
            const rolUpdated = await Rol.findByPk(id);
            res.json(rolUpdated);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el rol' });
        }
    }

    // Eliminar un rol
    static async delete(req: RolRequest, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const deleted = await Rol.destroy({ where: { id_rol: id } });
            if (deleted === 0) {
                res.status(404).json({ error: 'Rol no encontrado' });
                return;
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar el rol' });
        }
    }
}
