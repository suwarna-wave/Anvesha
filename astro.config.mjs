import { defineConfig } from 'astro/config';
import { existsSync } from 'node:fs';
import { loadEnvFile } from 'node:process';

import tailwindcss from '@tailwindcss/vite';
import { satteri } from '@astrojs/markdown-satteri';
import { sitePath } from './src/lib/urls.ts';

if (existsSync('.env')) loadEnvFile('.env');

const origin = process.env.SITE_URL?.trim();
if (
  origin &&
  (new URL(origin).protocol !== 'https:' || new URL(origin).pathname !== '/')
) {
  throw new Error('SITE_URL must be an HTTPS origin without a path.');
}
const base = process.env.BASE_PATH?.trim() || '/';
if (
  !/^\/(?:[a-zA-Z0-9._~-]+\/?)*$/.test(base) ||
  base.split('/').includes('..')
) {
  throw new Error('BASE_PATH must be a site path such as / or /anvesha/.');
}
export default defineConfig({
  site: origin || undefined,
  base,
  trailingSlash: 'always',
  output: 'static',
  markdown: {
    processor: satteri({
      mdastPlugins: [
        {
          name: 'project-paths',
          link(node, ctx) {
            ctx.setProperty(node, 'url', sitePath(node.url, base));
          },
          image(node, ctx) {
            ctx.setProperty(node, 'url', sitePath(node.url, base));
          },
          definition(node, ctx) {
            ctx.setProperty(node, 'url', sitePath(node.url, base));
          },
        },
      ],
    }),
  },
  vite: { plugins: [tailwindcss()], build: { assetsInlineLimit: 0 } },
});
