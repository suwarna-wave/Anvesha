import { sitePath, withoutBase } from '../src/lib/urls';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  insightSchema,
  eventSchema,
  initiativeSchema,
} from '../src/lib/schemas';
import {
  isPublicInsight,
  isPublicEvent,
  eventRegistrationAvailable,
} from '../src/lib/content-policy';
const now = new Date('2026-11-04T00:00:00Z');
const base = {
  title: 'Internal test fixture',
  summary: 'Never public',
  pillars: ['digital-liberty'],
};
test('draft, undated and future insights stay private', () => {
  assert.equal(
    isPublicInsight(
      { status: 'draft', publishedAt: new Date('2026-01-01') },
      now,
    ),
    false,
  );
  assert.equal(isPublicInsight({ status: 'published' }, now), false);
  assert.equal(
    isPublicInsight(
      { status: 'published', publishedAt: new Date('2027-01-01') },
      now,
    ),
    false,
  );
  assert.equal(
    isPublicInsight(
      { status: 'published', publishedAt: new Date('2026-01-01') },
      now,
    ),
    true,
  );
});
test('published insights need date and verified byline', () => {
  assert.equal(
    insightSchema.safeParse({ ...base, status: 'published', type: 'Explainer' })
      .success,
    false,
  );
  assert.equal(
    insightSchema.safeParse({
      ...base,
      status: 'published',
      type: 'Explainer',
      publishedAt: '2026-11-04',
      authors: ['Verified fixture author'],
    }).success,
    true,
  );
});
test('schemas reject invalid topics, report paths and chronology', () => {
  assert.equal(
    insightSchema.safeParse({ ...base, type: 'Research', pillars: ['invalid'] })
      .success,
    false,
  );
  assert.equal(
    insightSchema.safeParse({
      ...base,
      type: 'Research',
      report: 'https://example.com/fake.pdf',
    }).success,
    false,
  );
  assert.equal(
    insightSchema.safeParse({
      ...base,
      type: 'Research',
      publishedAt: '2026-11-04',
      updatedAt: '2026-01-01',
    }).success,
    false,
  );
  assert.equal(
    initiativeSchema.safeParse({
      ...base,
      lifecycle: 'imaginary',
      audience: 'Students',
      activities: ['Test'],
    }).success,
    false,
  );
});
test('planned and draft events are excluded; confirmed cancelled events remain readable', () => {
  assert.equal(
    isPublicEvent({ status: 'draft', state: 'open', startsAt: now }),
    false,
  );
  assert.equal(
    isPublicEvent({ status: 'published', state: 'planned', startsAt: now }),
    false,
  );
  assert.equal(isPublicEvent({ status: 'published', state: 'open' }), false);
  assert.equal(
    isPublicEvent({ status: 'published', state: 'cancelled', startsAt: now }),
    true,
  );
});
test('events require explicit timezone, confirmed location and ordered dates', () => {
  const event = {
    ...base,
    type: 'Workshop',
    status: 'published',
    state: 'open',
    format: 'Online',
  };
  assert.equal(eventSchema.safeParse(event).success, false);
  assert.equal(
    eventSchema.safeParse({
      ...event,
      startsAt: '2026-12-01T10:00:00',
      location: 'Approved platform',
    }).success,
    false,
  );
  assert.equal(
    eventSchema.safeParse({
      ...event,
      startsAt: '2026-12-01T10:00:00+05:45',
      location: 'Approved platform',
    }).success,
    true,
  );
  assert.equal(
    eventSchema.safeParse({
      ...event,
      startsAt: '2026-12-01T10:00:00Z',
      endsAt: '2026-11-01T10:00:00Z',
      location: 'Approved platform',
    }).success,
    false,
  );
});
test('registration never opens for cancelled, full, completed or expired events', () => {
  const entry = {
    state: 'open',
    registrationUrl: 'https://example.com',
    startsAt: new Date('2026-12-01T00:00:00Z'),
  };
  assert.equal(eventRegistrationAvailable(entry, now), true);
  for (const state of ['cancelled', 'completed', 'full', 'planned'])
    assert.equal(eventRegistrationAvailable({ ...entry, state }, now), false);
  assert.equal(
    eventRegistrationAvailable(
      { ...entry, deadline: new Date('2026-11-01') },
      now,
    ),
    false,
  );
  assert.equal(
    eventRegistrationAvailable(
      { ...entry, startsAt: new Date('2026-01-01') },
      now,
    ),
    false,
  );
  assert.equal(
    eventRegistrationAvailable(
      { state: 'open', startsAt: entry.startsAt },
      now,
    ),
    false,
  );
});

test('project links preserve assets, anchors and external destinations', () => {
  assert.equal(sitePath('/about', '/anvesha/'), '/anvesha/about/');
  assert.equal(
    sitePath('/our-work#dialogue', '/anvesha/'),
    '/anvesha/our-work/#dialogue',
  );
  assert.equal(
    sitePath('/documents/report.pdf', '/anvesha/'),
    '/anvesha/documents/report.pdf',
  );
  assert.equal(
    sitePath('/images/og-default.png?version=2', '/anvesha/'),
    '/anvesha/images/og-default.png?version=2',
  );
  for (const path of [
    '#main',
    'mailto:fixture@example.org',
    'https://example.org/register',
    '//example.org/image.png',
  ])
    assert.equal(sitePath(path, '/anvesha/'), path);
});
test('root deployments and already-prefixed links resolve without doubling', () => {
  assert.equal(sitePath('/about', '/'), '/about/');
  assert.equal(sitePath('/', '/anvesha/'), '/anvesha/');
  assert.equal(sitePath('/anvesha/about/', '/anvesha/'), '/anvesha/about/');
  assert.equal(sitePath('/anvesha', '/anvesha/'), '/anvesha/');
});
test('active navigation strips only its own project prefix', () => {
  assert.equal(withoutBase('/anvesha/about/', '/anvesha/'), '/about/');
  assert.equal(withoutBase('/anvesha/', '/anvesha/'), '/');
  assert.equal(
    withoutBase('/anvesha-other/about/', '/anvesha/'),
    '/anvesha-other/about/',
  );
});
