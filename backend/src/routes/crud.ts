import { Router, type Request, type Response } from 'express';
import { requireAuth } from '../auth/middleware.js';
import { expand, expandMany, collapse } from '../lib/serialize.js';
import { logActivity } from '../lib/activity.js';

interface CrudOptions {
  model: any; // prisma delegate
  entity: string; // etkinlik günlüğü / hata mesajları için ad
  jsonFields?: string[]; // JSON string olarak tutulan alanlar
  titleField?: string; // günlükte gösterilecek alan (ör. 'name')
  searchFields?: string[]; // ?q= araması için alanlar
  defaultOrder?: object; // sıralama
  allowedFields?: string[]; // yazmaya izin verilen alanlar (whitelist)
}

// Genel amaçlı CRUD router fabrikası (JSON alan serileştirme + aktivite günlüğü ile).
export function createCrudRouter(opts: CrudOptions): Router {
  const router = Router();
  const jsonFields = opts.jsonFields ?? [];
  const order = opts.defaultOrder ?? { order: 'asc' };

  const pick = (body: Record<string, any>) => {
    if (!opts.allowedFields) return body;
    const out: Record<string, any> = {};
    for (const k of opts.allowedFields) if (body[k] !== undefined) out[k] = body[k];
    return out;
  };

  // GENEL: aktif kayıtları listele (frontend için)
  router.get('/public', async (_req: Request, res: Response) => {
    const rows = await opts.model.findMany({ where: { active: true }, orderBy: order });
    res.json(expandMany(rows, jsonFields));
  });

  // ADMIN: tümünü listele (arama destekli)
  router.get('/', requireAuth, async (req: Request, res: Response) => {
    const q = (req.query.q as string)?.trim();
    let where: any = undefined;
    if (q && opts.searchFields?.length) {
      where = { OR: opts.searchFields.map((f) => ({ [f]: { contains: q } })) };
    }
    const rows = await opts.model.findMany({ where, orderBy: order });
    res.json(expandMany(rows, jsonFields));
  });

  // ADMIN: tekil kayıt
  router.get('/:id', requireAuth, async (req: Request, res: Response) => {
    const row = await opts.model.findUnique({ where: { id: Number(req.params.id) } });
    if (!row) return res.status(404).json({ error: 'Kayıt bulunamadı.' });
    res.json(expand(row, jsonFields));
  });

  // ADMIN: oluştur
  router.post('/', requireAuth, async (req: Request, res: Response) => {
    try {
      const data = collapse(pick(req.body), jsonFields);
      const row = await opts.model.create({ data });
      await logActivity(opts.entity, 'create', opts.titleField ? row[opts.titleField] : undefined, row.id, req.user?.id);
      res.status(201).json(expand(row, jsonFields));
    } catch (e: any) {
      res.status(400).json({ error: 'Kayıt oluşturulamadı: ' + (e?.message ?? 'bilinmeyen hata') });
    }
  });

  // ADMIN: güncelle
  router.put('/:id', requireAuth, async (req: Request, res: Response) => {
    try {
      const data = collapse(pick(req.body), jsonFields);
      const row = await opts.model.update({ where: { id: Number(req.params.id) }, data });
      await logActivity(opts.entity, 'update', opts.titleField ? row[opts.titleField] : undefined, row.id, req.user?.id);
      res.json(expand(row, jsonFields));
    } catch (e: any) {
      res.status(400).json({ error: 'Kayıt güncellenemedi: ' + (e?.message ?? 'bilinmeyen hata') });
    }
  });

  // ADMIN: sil
  router.delete('/:id', requireAuth, async (req: Request, res: Response) => {
    try {
      const row = await opts.model.delete({ where: { id: Number(req.params.id) } });
      await logActivity(opts.entity, 'delete', opts.titleField ? row[opts.titleField] : undefined, row.id, req.user?.id);
      res.json({ ok: true });
    } catch (e: any) {
      res.status(400).json({ error: 'Kayıt silinemedi: ' + (e?.message ?? 'bilinmeyen hata') });
    }
  });

  return router;
}
