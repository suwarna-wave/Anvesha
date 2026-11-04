import type { APIRoute } from 'astro';
import { publicInsights } from '../lib/content';
import { organization } from '../lib/organization';
const escape = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export const GET: APIRoute = async ({ site }) => {
  const entries = site && organization.indexable ? await publicInsights() : [];
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${escape(organization.name)} Insights</title><description>${escape(organization.mission)}</description>${site ? `<link>${escape(new URL('/insights', site).href)}</link>` : ''}${entries.map((entry) => `<item><title>${escape(entry.data.title)}</title><description>${escape(entry.data.summary)}</description><link>${escape(new URL(`/insights/${entry.id}`, site).href)}</link><guid>${escape(new URL(`/insights/${entry.id}`, site).href)}</guid><pubDate>${entry.data.publishedAt!.toUTCString()}</pubDate></item>`).join('')}</channel></rss>`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
