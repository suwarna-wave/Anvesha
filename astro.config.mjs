import { defineConfig } from 'astro/config';
import { existsSync } from 'node:fs';
import { loadEnvFile } from 'node:process';

import tailwindcss from '@tailwindcss/vite';

if (existsSync('.env')) loadEnvFile('.env');

const origin = process.env.SITE_URL?.trim();
if (
  origin &&
  (new URL(origin).protocol !== 'https:' || new URL(origin).pathname !== '/')
) {
  throw new Error('SITE_URL must be an HTTPS origin without a path.');
}
export default defineConfig({
  site: origin || undefined,
  output: 'static',
  vite: { plugins: [tailwindcss()], build: { assetsInlineLimit: 0 } },
});
