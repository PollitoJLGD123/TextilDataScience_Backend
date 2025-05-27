import { Request, Response } from 'express';
import { Empleado } from '../models/empleado.model';
import { empleadoSchema } from '../validators/empleado.validator';

export class EmpleadoController {
    // Crear un nuevo empleado
    public static async create(req: Request, res: Response): Promise<void> {
        const { error } = empleadoSchema.validate(req.body);
        if (error) {
            res.status(400).json({ error: error.details[0].message });
            return;
        }

        try {
            const empleado = await Empleado.create(req.body);
            res.status(201).json(empleado);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el empleado' });
        }
    }

    // Obtener todos los empleados (con relación a Rol)
    public static async getAll(req: Request, res: Response): Promise<void> {
        try {
            const empleados = await Empleado.findAll({ include: ['rol'] });
            res.json(empleados);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener empleados' });
        }
    }

    // Obtener un empleado por ID (con relación a Rol)
    public static async getById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const empleado = await Empleado.findByPk(id, { include: ['rol'] });
            if (!empleado) {
                res.status(404).json({ error: 'Empleado no encontrado' });
                return;
            }
            res.json(empleado);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener el empleado' });
        }
    }

    // Actualizar un empleado
    public static async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const [updated] = await Empleado.update(req.body, { where: { id_empleado: id } });
            if (updated === 0) {
                res.status(404).json({ error: 'Empleado no encontrado' });
                return;
            }

            const empleadoUpdated = await Empleado.findByPk(id);
            res.json(empleadoUpdated);
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el empleado' });
        }
    }

    // Eliminar un empleado
    public static async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const deleted = await Empleado.destroy({ where: { id_empleado: id } });
            if (deleted === 0) {
                res.status(404).json({ error: 'Empleado no encontrado' });
                return;
            }

            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar el empleado' });
        }
    }
}
