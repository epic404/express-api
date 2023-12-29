import { Application } from 'express';
import authRouter from './auth/auth.routes';

export function initRoutes(app: Application) {
  app.use('/api/auth', authRouter);
}