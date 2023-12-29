import {
  NextFunction,
  Request,
  Response,
  Router,
} from 'express';

const authRouter = Router();

authRouter.use((
  request: Request,
  response: Response,
  next: NextFunction,
 ) => {
  console.log('Auth router middleware');
  next();
});

// TODO: Add auth middleware here.
authRouter.get('/test-auth', (
  request: Request,
  response: Response,
) => {
  return response
    .status(200)
    .send('OK');
});

authRouter.post('/generate-token', (
  request: Request,
  response: Response,
) => {

});

export default authRouter;