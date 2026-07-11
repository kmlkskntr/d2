import jwt from 'jsonwebtoken';
import { ENV } from '../lib/env.js';

export interface JwtPayload {
  id: number;
  email: string;
  role: string;
}

export function signToken(payload: JwtPayload): string {
  return jwt.sign(payload, ENV.JWT_SECRET, { expiresIn: ENV.JWT_EXPIRES_IN as any });
}

export function verifyToken(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, ENV.JWT_SECRET) as JwtPayload;
  } catch {
    return null;
  }
}
