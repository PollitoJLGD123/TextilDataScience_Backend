import { Router, Request, Response } from 'express';
import UserRouter from './user.route';

const router = Router();

router.use('/user', UserRouter);

router.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Success!!!',
    version: '1.0'
  });
});

export default router;