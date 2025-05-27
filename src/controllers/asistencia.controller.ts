import { Response } from 'express';
import { Asistencia } from '../models/asistencia.model';
import { asistenciaSchema } from '../validators/asistencia.validator';
import { AsistenciaRequest } from '../types/asistencia.type';

export class AsistenciaController {
    static async create(req: AsistenciaRequest, res: Response): Promise<void> {
        const { error } = asistenciaSchema.validate(req.body);
        if (error) {
            res.status(400).json({ error: error.details[0].message });
            return;
        }
        try {
            const asistencia = await Asistencia.create(req.body);
            res.status(201).json(asistencia);
        } catch (err) {
            res.status(500).json({ error: 'Error al crear la asistencia' });
        }
    }

    static async getAll(_req: AsistenciaRequest, res: Response): Promise<void> {
        try {
            const asistencias = await Asistencia.findAll();
            res.json(asistencias);
        } catch {
            res.status(500).json({ error: 'Error al obtener asistencias' });
        }
    }

    static async getById(req: AsistenciaRequest, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const asistencia = await Asistencia.findByPk(id);
            if (!asistencia) {
                res.status(404).json({ error: 'Asistencia no encontrada' });
                return;
            }
            res.json(asistencia);
        } catch {
            res.status(500).json({ error: 'Error al obtener asistencia' });
        }
    }

    static async update(req: AsistenciaRequest, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const [updated] = await Asistencia.update(req.body, { where: { id_asistencia: id } });
            if (updated === 0) {
                res.status(404).json({ error: 'Asistencia no encontrada' });
                return;
            }
            const updatedRecord = await Asistencia.findByPk(id);
            res.json(updatedRecord);
        } catch {
            res.status(500).json({ error: 'Error al actualizar asistencia' });
        }
    }

    static async delete(req: AsistenciaRequest, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const deleted = await Asistencia.destroy({ where: { id_asistencia: id } });
            if (deleted === 0) {
                res.status(404).json({ error: 'Asistencia no encontrada' });
                return;
            }
            res.status(204).send();
        } catch {
            res.status(500).json({ error: 'Error al eliminar asistencia' });
        }
    }
}
