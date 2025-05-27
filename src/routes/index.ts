import { Router, Request, Response } from 'express';
import UserRouter from './user.route';
import rolRoutes from './rol.route';
import empleadoRoutes from './empleado.route';
import contratoRoutes from './contrato.route';
import horarioRoutes from './horario.route';
import nominaRoutes from './nomina.route';
import pagoRoutes from './pago.route';
import asistenciaRoutes from './asistencia.route';

const router = Router();

router.use('/user', UserRouter);
router.use('/roles', rolRoutes);
router.use('/empleados', empleadoRoutes);
router.use('/contratos', contratoRoutes);
router.use('/horarios', horarioRoutes);
router.use('/nominas', nominaRoutes);
router.use('/pagos', pagoRoutes);
router.use('/asistencias', asistenciaRoutes);

router.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Success!!!',
    version: '1.0'
  });
});

export default router;
