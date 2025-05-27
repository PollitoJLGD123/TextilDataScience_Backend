import { Response } from 'express';
import { Pago } from '../models/pago.model';
import { pagoSchema } from '../validators/pago.validator';
import { PagoRequest } from '../types/pago.type';

export class PagoController {
    static async create(req: PagoRequest, res: Response): Promise<void> {
        const { error } = pagoSchema.validate(req.body);
        if (error) {
            res.status(400).json({ error: error.details[0].message });
            return;
        }
        try {
            const pago = await Pago.create(req.body);
            res.status(201).json(pago);
        } catch {
            res.status(500).json({ error: 'Error al registrar el pago' });
        }
    }

    static async getAll(_req: PagoRequest, res: Response): Promise<void> {
        try {
            const pagos = await Pago.findAll();
            res.json(pagos);
        } catch {
            res.status(500).json({ error: 'Error al obtener pagos' });
        }
    }

    static async getById(req: PagoRequest, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const pago = await Pago.findByPk(id);
            if (!pago) {
                res.status(404).json({ error: 'Pago no encontrado' });
                return;
            }
            res.json(pago);
        } catch {
            res.status(500).json({ error: 'Error al obtener pago' });
        }
    }

    static async update(req: PagoRequest, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const [updated] = await Pago.update(req.body, { where: { id_pago: id } });
            if (updated === 0) {
                res.status(404).json({ error: 'Pago no encontrado' });
                return;
            }
            const pagoUpdated = await Pago.findByPk(id);
            res.json(pagoUpdated);
        } catch {
            res.status(500).json({ error: 'Error al actualizar pago' });
        }
    }

    static async delete(req: PagoRequest, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const deleted = await Pago.destroy({ where: { id_pago: id } });
            if (deleted === 0) {
                res.status(404).json({ error: 'Pago no encontrado' });
                return;
            }
            res.status(204).send();
        } catch {
            res.status(500).json({ error: 'Error al eliminar pago' });
        }
    }
}
