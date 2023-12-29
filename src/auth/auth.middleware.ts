import { NextFunction, Request, Response } from 'express';
import { verifyToken } from './auth.utils';

export async function verifyAuth(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  try {
    const bearerHeader = request.headers['authorization'];

    if (!bearerHeader) {
      throw 'No authorization token provided';
    }

    const token = bearerHeader.split(' ')[1];
    const decoded = await verifyToken(token);

    // This is a pain w/ TypeScript.
    request['token'] = decoded;
    next();
  } catch (error) {
    throw error;
  }
}