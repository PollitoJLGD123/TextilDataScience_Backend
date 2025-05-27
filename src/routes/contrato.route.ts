import { Router } from 'express';
import { ContratoController } from '../controllers/contrato.controller';
import { validateContrato } from '../middlewares/contrato.middleware';

const router = Router();

router.post('/', validateContrato, ContratoController.create);
router.get('/', ContratoController.getAll);
router.get('/:id', ContratoController.getById);
router.put('/:id', validateContrato, ContratoController.update);
router.delete('/:id', ContratoController.delete);

export default router;
