import { Router } from 'express';
import { HorarioController } from '../controllers/horario.controller';
import { validateHorario } from '../middlewares/horario.middleware';

const router = Router();

router.post('/', validateHorario, HorarioController.create);
router.get('/', HorarioController.getAll);
router.get('/:id', HorarioController.getById);
router.put('/:id', validateHorario, HorarioController.update);
router.delete('/:id', HorarioController.delete);

export default router;
