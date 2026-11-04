import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';
const root = resolve('dist');
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((entry) =>
        entry.isDirectory()
          ? walk(join(dir, entry.name))
          : join(dir, entry.name),
      ),
    )
  ).flat();
}
const files = await walk(root);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
let links = 0;
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  assert.equal(
    (html.match(/<h1[\s>]/g) || []).length,
    1,
    `One H1 required: ${file}`,
  );
  assert.ok(
    html.includes('name="description"'),
    `Description missing: ${file}`,
  );
  assert.ok(!html.includes('<form'), `Unexpected form: ${file}`);
  assert.ok(
    !html.includes('Internal test fixture'),
    `Test content leaked: ${file}`,
  );
  for (const match of html.matchAll(/(?:href|src)="(\/(?!\/)[^"]*)"/g)) {
    const url = new URL(
      match[1].replaceAll('&amp;', '&'),
      'https://local.test',
    );
    const base = join(root, decodeURIComponent(url.pathname));
    const candidates = [base, join(base, 'index.html')];
    const found = await Promise.all(
      candidates.map(async (candidate) => {
        try {
          return (await stat(candidate)).isFile();
        } catch {
          return false;
        }
      }),
    );
    assert.ok(found.some(Boolean), `Broken local link ${match[1]} in ${file}`);
    if (url.hash && found[1]) {
      const target = await readFile(candidates[1], 'utf8');
      assert.ok(
        target.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),
        `Missing anchor ${match[1]}`,
      );
    }
    links++;
  }
}
assert.ok(htmlFiles.length >= 11);
console.log(
  `Validated ${htmlFiles.length} HTML pages and ${links} local references.`,
);
