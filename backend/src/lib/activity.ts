import { prisma } from './prisma.js';

// Son düzenlenen içerikler için etkinlik günlüğü.
export async function logActivity(
  entity: string,
  action: 'create' | 'update' | 'delete',
  title?: string,
  entityId?: number,
  userId?: number,
) {
  try {
    await prisma.activityLog.create({
      data: { entity, action, title: title ?? null, entityId: entityId ?? null, userId: userId ?? null },
    });
  } catch {
    // günlükleme başarısız olsa da ana işlemi bozma
  }
}
