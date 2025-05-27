import { Router } from 'express';
import { NominaController } from '../controllers/nomina.controller';
import { validateNomina } from '../middlewares/nomina.middleware';

const router = Router();

router.post('/', validateNomina, NominaController.create);
router.get('/', NominaController.getAll);
router.get('/:id', NominaController.getById);
router.put('/:id', validateNomina, NominaController.update);
router.delete('/:id', NominaController.delete);

export default router;
