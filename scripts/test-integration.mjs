import assert from 'node:assert/strict';
import {
  cp,
  mkdtemp,
  mkdir,
  readFile,
  writeFile,
  symlink,
  rm,
} from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
const source = resolve('.');
const root = await mkdtemp(join(tmpdir(), 'clts-integration-'));
async function content(
  collection,
  slug,
  data,
  body = '## Internal test content\n\nThis material is an internal test fixture, never a real publication.',
) {
  await writeFile(
    join(root, 'src/content', collection, `${slug}.md`),
    `---\n${JSON.stringify(data, null, 2)}\n---\n${body}\n`,
  );
}
try {
  for (const entry of [
    'src',
    'public',
    'astro.config.mjs',
    'tsconfig.json',
    'package.json',
  ])
    await cp(join(source, entry), join(root, entry), { recursive: true });
  await symlink(
    join(source, 'node_modules'),
    join(root, 'node_modules'),
    'dir',
  );
  const base = {
    title: 'Internal test fixture',
    summary: 'Internal demonstration only',
    pillars: ['digital-liberty'],
    status: 'published',
  };
  const insight = {
    ...base,
    type: 'Explainer',
    authors: ['Internal fixture author'],
    publishedAt: '2020-01-01',
    sources: [{ title: 'Test source', url: 'https://example.org/source' }],
  };
  await content('insights', 'published-fixture', insight);
  await content('insights', 'draft-fixture', { ...insight, status: 'draft' });
  await content('insights', 'future-fixture', {
    ...insight,
    publishedAt: '2099-01-01',
  });
  const event = {
    ...base,
    type: 'Workshop',
    state: 'open',
    startsAt: '2099-12-01T10:00:00+05:45',
    format: 'Online',
    location: 'Internal fixture platform',
    registrationUrl: 'https://example.org/register',
  };
  await content('events', 'open-fixture', event);
  await content('events', 'cancelled-fixture', {
    ...event,
    state: 'cancelled',
  });
  await content('events', 'planned-fixture', { ...event, state: 'planned' });
  await content('events', 'draft-event-fixture', { ...event, status: 'draft' });
  await mkdir(join(root, 'artifacts'), { recursive: true });
  // Test .env loading, not only shell variables. example.org is reserved for examples.
  await writeFile(
    join(root, '.env'),
    'SITE_URL=https://example.org\nPUBLIC_INDEXABLE=true\nPUBLIC_CONTACT_EMAIL=fixture@example.org\n',
  );
  const env = { ...process.env, ASTRO_TELEMETRY_DISABLED: '1' };
  delete env.SITE_URL;
  delete env.PUBLIC_INDEXABLE;
  delete env.PUBLIC_CONTACT_EMAIL;
  const result = spawnSync(
    process.execPath,
    [join(source, 'node_modules/astro/bin/astro.mjs'), 'build'],
    { cwd: root, env, encoding: 'utf8' },
  );
  assert.equal(result.status, 0, result.stdout + result.stderr);
  const output = async (path) => readFile(join(root, 'dist', path), 'utf8');
  const article = await output('insights/published-fixture/index.html');
  assert.ok(
    article.includes('Internal fixture author') &&
      article.includes('Test source'),
  );
  assert.ok(
    article.includes('application/ld+json') &&
      article.includes('"@type":"Article"'),
  );
  assert.ok(article.includes('https://example.org/insights/published-fixture'));
  assert.ok(
    (await output('events/open-fixture/index.html')).includes(
      'Register on External Site',
    ),
  );
  const cancelled = await output('events/cancelled-fixture/index.html');
  assert.ok(cancelled.includes('This event has been cancelled.'));
  assert.ok(!cancelled.includes('Register on External Site'));
  assert.ok(
    (await output('contact/index.html')).includes('mailto:fixture@example.org'),
  );
  for (const file of [
    'insights/index.html',
    'events/index.html',
    'sitemap.xml',
    'rss.xml',
    'index.html',
  ]) {
    const text = await output(file);
    for (const slug of [
      'draft-fixture',
      'future-fixture',
      'planned-fixture',
      'draft-event-fixture',
    ])
      assert.ok(!text.includes(slug), `${slug} leaked to ${file}`);
  }
  const rss = await output('rss.xml');
  assert.ok(
    rss.includes('<item>') && rss.includes('/insights/published-fixture'),
  );
  const sitemap = await output('sitemap.xml');
  assert.ok(sitemap.includes('/events/cancelled-fixture'));
  assert.ok((await output('robots.txt')).includes('Allow: /'));
  console.log(
    'Passed isolated detail templates, publication exclusion, configured email, .env, sitemap, RSS and structured-data checks.',
  );
} finally {
  await rm(root, { recursive: true, force: true });
}
