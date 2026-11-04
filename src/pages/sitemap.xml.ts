import { sitePath } from '../lib/urls';
import type { APIRoute } from 'astro';
import { publicInsights, publicEvents } from '../lib/content';
import { organization } from '../lib/organization';
const routes = [
  '/',
  '/about',
  '/our-work',
  '/insights',
  '/events',
  '/get-involved',
  '/partnerships',
  '/contact',
  '/privacy',
  '/accessibility',
];
export const GET: APIRoute = async ({ site }) => {
  const paths =
    !site || !organization.indexable
      ? []
      : [
          ...routes,
          ...(await publicInsights()).map((e) => `/insights/${e.id}`),
          ...(await publicEvents()).map((e) => `/events/${e.id}`),
        ];
  const escape = (value: string) =>
    value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${escape(new URL(sitePath(path), site).href)}</loc></url>`).join('')}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
