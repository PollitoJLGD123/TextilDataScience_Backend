import { Router } from 'express';
import { AsistenciaController } from '../controllers/asistencia.controller';
import { validateAsistencia } from '../middlewares/asistencia.middleware';

const router = Router();

router.post('/', validateAsistencia, AsistenciaController.create);
router.get('/', AsistenciaController.getAll);
router.get('/:id', AsistenciaController.getById);
router.put('/:id', validateAsistencia, AsistenciaController.update);
router.delete('/:id', AsistenciaController.delete);

export default router;
