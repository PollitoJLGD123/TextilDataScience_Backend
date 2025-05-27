import { Response } from 'express';
import { Contrato } from '../models/contrato.model';
import { contratoSchema } from '../validators/contrato.validator';
import { ContratoRequest } from '../types/contrato.type';

export class ContratoController {
    static async create(req: ContratoRequest, res: Response): Promise<void> {
        const { error } = contratoSchema.validate(req.body);
        if (error) {
            res.status(400).json({ error: error.details[0].message });
            return;
        }
        try {
            const contrato = await Contrato.create(req.body);
            res.status(201).json(contrato);
        } catch (err) {
            res.status(500).json({ error: 'Error al crear el contrato' });
        }
    }

    static async getAll(_req: ContratoRequest, res: Response): Promise<void> {
        try {
            const contratos = await Contrato.findAll();
            res.json(contratos);
        } catch {
            res.status(500).json({ error: 'Error al obtener contratos' });
        }
    }

    static async getById(req: ContratoRequest, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const contrato = await Contrato.findByPk(id);
            if (!contrato) {
                res.status(404).json({ error: 'Contrato no encontrado' });
                return;
            }
            res.json(contrato);
        } catch {
            res.status(500).json({ error: 'Error al obtener contrato' });
        }
    }

    static async update(req: ContratoRequest, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const [updated] = await Contrato.update(req.body, { where: { id_contrato: id } });
            if (updated === 0) {
                res.status(404).json({ error: 'Contrato no encontrado' });
                return;
            }
            const updatedContrato = await Contrato.findByPk(id);
            res.json(updatedContrato);
        } catch {
            res.status(500).json({ error: 'Error al actualizar contrato' });
        }
    }

    static async delete(req: ContratoRequest, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const deleted = await Contrato.destroy({ where: { id_contrato: id } });
            if (deleted === 0) {
                res.status(404).json({ error: 'Contrato no encontrado' });
                return;
            }
            res.status(204).send();
        } catch {
            res.status(500).json({ error: 'Error al eliminar contrato' });
        }
    }
}
