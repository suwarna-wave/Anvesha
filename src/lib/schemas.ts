import { z } from 'astro/zod';
import { pillarIds } from '../content/pillars';
const base = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  status: z.enum(['draft', 'published']).default('draft'),
  pillars: z.array(z.enum(pillarIds)).min(1),
});
export const insightSchema = base
  .extend({
    type: z.enum([
      'Policy Brief',
      'Research',
      'Explainer',
      'Commentary',
      'Event Reflection',
      'Resource',
    ]),
    authors: z.array(z.string().min(1)).default([]),
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    sources: z
      .array(z.object({ title: z.string().min(1), url: z.url() }))
      .default([]),
    report: z
      .string()
      .regex(/^\/documents\/[a-zA-Z0-9_/-]+\.pdf$/)
      .optional(),
    featured: z.boolean().default(false),
  })
  .superRefine((data, ctx) => {
    if (
      data.status === 'published' &&
      (!data.publishedAt || !data.authors.length)
    )
      ctx.addIssue({
        code: 'custom',
        message: 'Published insights require a date and verified author.',
      });
    if (data.updatedAt && data.publishedAt && data.updatedAt < data.publishedAt)
      ctx.addIssue({
        code: 'custom',
        message: 'Updated date cannot precede publication.',
      });
  });
export const eventSchema = base
  .extend({
    type: z.enum([
      'Dialogue',
      'Roundtable',
      'Training',
      'Workshop',
      'Hackathon',
      'Public Lecture',
    ]),
    state: z
      .enum(['planned', 'open', 'full', 'cancelled', 'completed'])
      .default('planned'),
    startsAt: z.iso
      .datetime({ offset: true })
      .transform((v) => new Date(v))
      .optional(),
    endsAt: z.iso
      .datetime({ offset: true })
      .transform((v) => new Date(v))
      .optional(),
    timezone: z.literal('Asia/Kathmandu').default('Asia/Kathmandu'),
    format: z.enum(['In person', 'Online', 'Hybrid']),
    location: z.string().min(1).optional(),
    accessNotes: z.string().optional(),
    registrationUrl: z
      .url()
      .refine((v) => v.startsWith('https://'), 'Registration must use HTTPS.')
      .optional(),
    deadline: z.iso
      .datetime({ offset: true })
      .transform((v) => new Date(v))
      .optional(),
    speakers: z.array(z.string().min(1)).default([]),
  })
  .superRefine((data, ctx) => {
    if (
      data.status === 'published' &&
      data.state !== 'planned' &&
      (!data.startsAt || !data.location)
    )
      ctx.addIssue({
        code: 'custom',
        message: 'Public events need confirmed date and location/platform.',
      });
    if (data.endsAt && data.startsAt && data.endsAt < data.startsAt)
      ctx.addIssue({ code: 'custom', message: 'Event end must follow start.' });
    if (data.deadline && data.startsAt && data.deadline > data.startsAt)
      ctx.addIssue({
        code: 'custom',
        message: 'Registration deadline must not follow event start.',
      });
  });
export const initiativeSchema = base.extend({
  lifecycle: z.enum(['exploring', 'planned', 'active', 'completed']),
  audience: z.string().min(1),
  activities: z.array(z.string().min(1)).min(1),
});
