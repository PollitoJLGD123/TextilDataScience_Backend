// routes/empleado.routes.ts
import { Router } from 'express';
import { EmpleadoController } from '../controllers/empleado.controller';
import { validateEmpleado } from '../middlewares/empleado.middleware';

const router = Router();

// POST /api/empleados
router.post('/', validateEmpleado, EmpleadoController.create);

// GET /api/empleados
router.get('/', EmpleadoController.getAll);

// GET /api/empleados/:id
router.get('/:id', EmpleadoController.getById);

// PUT /api/empleados/:id
router.put('/:id', validateEmpleado, EmpleadoController.update);

// DELETE /api/empleados/:id
router.delete('/:id', EmpleadoController.delete);

export default router;