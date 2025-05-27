import { Response } from 'express';
import { Nomina } from '../models/nomina.model';
import { nominaSchema } from '../validators/nomina.validator';
import { NominaRequest } from '../types/nomina.type';

export class NominaController {
    static async create(req: NominaRequest, res: Response): Promise<void> {
        const { error } = nominaSchema.validate(req.body);
        if (error) {
            res.status(400).json({ error: error.details[0].message });
            return;
        }
        try {
            const nomina = await Nomina.create(req.body);
            res.status(201).json(nomina);
        } catch {
            res.status(500).json({ error: 'Error al crear la nómina' });
        }
    }

    static async getAll(_req: NominaRequest, res: Response): Promise<void> {
        try {
            const nominas = await Nomina.findAll();
            res.json(nominas);
        } catch {
            res.status(500).json({ error: 'Error al obtener nóminas' });
        }
    }

    static async getById(req: NominaRequest, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const nomina = await Nomina.findByPk(id);
            if (!nomina) {
                res.status(404).json({ error: 'Nómina no encontrada' });
                return;
            }
            res.json(nomina);
        } catch {
            res.status(500).json({ error: 'Error al obtener nómina' });
        }
    }

    static async update(req: NominaRequest, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const [updated] = await Nomina.update(req.body, { where: { id_nomina: id } });
            if (updated === 0) {
                res.status(404).json({ error: 'Nómina no encontrada' });
                return;
            }
            const nominaUpdated = await Nomina.findByPk(id);
            res.json(nominaUpdated);
        } catch {
            res.status(500).json({ error: 'Error al actualizar nómina' });
        }
    }

    static async delete(req: NominaRequest, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const deleted = await Nomina.destroy({ where: { id_nomina: id } });
            if (deleted === 0) {
                res.status(404).json({ error: 'Nómina no encontrada' });
                return;
            }
            res.status(204).send();
        } catch {
            res.status(500).json({ error: 'Error al eliminar nómina' });
        }
    }
}
