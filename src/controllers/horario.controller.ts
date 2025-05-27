import { Response } from 'express';
import { Horario } from '../models/horario.model';
import { horarioSchema } from '../validators/horario.validator';
import { HorarioRequest } from '../types/horario.type';

export class HorarioController {
    static async create(req: HorarioRequest, res: Response): Promise<void> {
        const { error } = horarioSchema.validate(req.body);
        if (error) {
            res.status(400).json({ error: error.details[0].message });
            return;
        }
        try {
            const horario = await Horario.create(req.body);
            res.status(201).json(horario);
        } catch {
            res.status(500).json({ error: 'Error al crear el horario' });
        }
    }

    static async getAll(_req: HorarioRequest, res: Response): Promise<void> {
        try {
            const horarios = await Horario.findAll();
            res.json(horarios);
        } catch {
            res.status(500).json({ error: 'Error al obtener horarios' });
        }
    }

    static async getById(req: HorarioRequest, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const horario = await Horario.findByPk(id);
            if (!horario) {
                res.status(404).json({ error: 'Horario no encontrado' });
                return;
            }
            res.json(horario);
        } catch {
            res.status(500).json({ error: 'Error al obtener horario' });
        }
    }

    static async update(req: HorarioRequest, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const [updated] = await Horario.update(req.body, { where: { id_horario: id } });
            if (updated === 0) {
                res.status(404).json({ error: 'Horario no encontrado' });
                return;
            }
            const horarioUpdated = await Horario.findByPk(id);
            res.json(horarioUpdated);
        } catch {
            res.status(500).json({ error: 'Error al actualizar horario' });
        }
    }

    static async delete(req: HorarioRequest, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const deleted = await Horario.destroy({ where: { id_horario: id } });
            if (deleted === 0) {
                res.status(404).json({ error: 'Horario no encontrado' });
                return;
            }
            res.status(204).send();
        } catch {
            res.status(500).json({ error: 'Error al eliminar horario' });
        }
    }
}
