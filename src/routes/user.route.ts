import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { validateUser } from '../middlewares/user.middleware';

const router = Router();

router.post('/', validateUser, UserController.create);
router.get('/', UserController.getAll);
router.get('/:id', UserController.getById);
router.put('/:id', validateUser, UserController.update);
router.delete('/:id', UserController.delete);

export default router;
