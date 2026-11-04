import type { APIRoute } from 'astro';
import { organization } from '../lib/organization';
export const GET: APIRoute = ({ site }) =>
  new Response(
    site && organization.indexable
      ? `User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml', site).href}\n`
      : 'User-agent: *\nDisallow: /\n',
    { headers: { 'Content-Type': 'text/plain' } },
  );
