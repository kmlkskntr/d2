import type { Request, Response, NextFunction } from 'express';
import { verifyToken, type JwtPayload } from './jwt.js';

// Request'e kullanıcı bilgisini eklemek için genişletme
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

function extractToken(req: Request): string | null {
  const header = req.headers.authorization;
  if (header && header.startsWith('Bearer ')) return header.slice(7);
  if (req.cookies?.token) return req.cookies.token as string;
  return null;
}

// Geçerli token zorunlu
export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const token = extractToken(req);
  const payload = token ? verifyToken(token) : null;
  if (!payload) return res.status(401).json({ error: 'Yetkisiz erişim. Lütfen giriş yapın.' });
  req.user = payload;
  next();
}

// Belirli rol(ler) zorunlu
export function requireRole(...roles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return res.status(401).json({ error: 'Yetkisiz erişim.' });
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Bu işlem için yetkiniz yok.' });
    }
    next();
  };
}
