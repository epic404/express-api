import * as jwt from 'jsonwebtoken';

const jwtSecret = process.env.TOKEN_SECRET as string;

export function generateToken(metadata: any) {
  return jwt.sign(
    { ...metadata },
    jwtSecret,
    { expiresIn: '7d' },
  );
}

export function verifyToken(token: string) {
  return jwt.verify(
    token,
    jwtSecret,
  );
}