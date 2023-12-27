import { Application } from 'express';
import authRouter from './authRouter';

function setRoutes(app: Application) {
  app.use('/api/auth', authRouter);
}

export default setRoutes;