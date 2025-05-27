import { Router } from 'express';
import { PagoController } from '../controllers/pago.controller';
import { validatePago } from '../middlewares/pago.middleware';

const router = Router();

router.post('/', validatePago, PagoController.create);
router.get('/', PagoController.getAll);
router.get('/:id', PagoController.getById);
router.put('/:id', validatePago, PagoController.update);
router.delete('/:id', PagoController.delete);

export default router;
