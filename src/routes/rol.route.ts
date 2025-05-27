import { Router } from 'express';
import { RolController } from '../controllers/rol.controller';
import { validateRol } from '../middlewares/rol.middleware'; // Si deseas validar los datos con Joi

const router = Router();

// Crear un nuevo rol
router.post('/', validateRol, RolController.create);

// Obtener todos los roles
router.get('/', RolController.getAll);

// Obtener un rol por ID
router.get('/:id', RolController.getById);

// Actualizar un rol
router.put('/:id', validateRol, RolController.update);

// Eliminar un rol
router.delete('/:id', RolController.delete);

export default router;
