# Editorial guide

Publish only founder-approved facts and writing. Do not invent activities, dates, authors, speakers, funders, partners, attendance or legal status to fill a layout. English content uses British spelling. A real empty state is intentional.

## Add an insight

Create a flat, lowercase-hyphenated filename, for example `src/content/insights/your-approved-title.md`. The filename becomes the URL slug. The following is an **internal authoring example**, not an approved publication. Keep it as a draft until the text, date and actual author have been reviewed.

```yaml
---
title: Your approved title
summary: A clear one-sentence description.
type: Explainer
status: draft
authors: []
pillars:
  - digital-liberty
sources: []
featured: false
---
```

Add the body below the metadata. Start with prose; use H2/H3 headings rather than another H1. Attribute evidence and quotations. Distinguish findings, interpretation and recommendations. Add source objects with `title` and `url`; these appear in the Sources section. Use official references or DOI links where available. Every figure needs accurate alt text and a caption where appropriate.

Before switching to `status: published`, add actual verified author names and `publishedAt: YYYY-MM-DD`. Dates in the future do not publish early. `updatedAt` is optional and must not precede publication. Supported types: Policy Brief, Research, Explainer, Commentary, Event Reflection and Resource.

Optional `report: /documents/approved-filename.pdf` must refer to a real, approved accessible PDF in `public/documents/`. Check its title, author, accessibility, embedded metadata and permission to publish. Run `npm run test:site` after building to catch a missing file. Never expose confidential institutional documents.

## Add an event

Create `src/content/events/your-approved-event.md` with these fields. This is an internal example only:

```yaml
---
title: Your approved event title
summary: The purpose and intended audience.
type: Workshop
status: draft
state: planned
format: In person
timezone: Asia/Kathmandu
pillars:
  - learning
speakers: []
---
```

Supported types: Dialogue, Roundtable, Training, Workshop, Hackathon, Public Lecture. States: planned, open, full, cancelled, completed. Draft/planned entries remain private.

To publish a confirmed event, supply `startsAt` with an explicit offset (for Nepal use `YYYY-MM-DDTHH:mm:ss+05:45`), a confirmed `location` or online platform, `status: published` and the correct state. Optional `endsAt` and `deadline` also require offsets. An end cannot precede the start; a registration deadline cannot follow the start. Add only confirmed `speakers` and known `accessNotes`.

Describe eligibility, agenda and contact in the body when confirmed. Set `registrationUrl` only to an approved HTTPS service; the link is clearly labelled external. Full, cancelled, completed, expired or already-started events cannot have an enabled registration link. Record cancellations explicitly; do not quietly delete important changes. Mark completed events accurately and rebuild to archive them.

**Static timing:** dates and registration states are evaluated when the site builds. Rebuild at deadlines and event start, and ensure the external service independently closes registrations.

## Initiatives and topics

Create initiative Markdown in `src/content/initiatives/` with title, summary, status, pillars, `lifecycle` (exploring, planned, active, completed), audience and activities. Only published initiatives appear. The summary and activities are displayed on Our Work; an initiative detail page is not part of this version.

Canonical pillar identifiers:

- `digital-liberty`
- `technology-policy`
- `learning`
- `dialogue`
- `civic-innovation`

Update pillar descriptions in `src/content/pillars.ts` and shared editorial questions in `src/content/site-copy.ts`. Labels and references must stay consistent.

## Review and unpublish

1. Confirm sources, permission, status, author, dates and factual claims.
2. Run `npm run check`, `npm test`, `npm run build` and `npm run test:site`.
3. Review the page on mobile and desktop and test downloads/external links.
4. Obtain editorial approval, commit and deploy through the normal hosting process.
5. To unpublish, set `status: draft` and rebuild/deploy. Remove sensitive public assets separately; use the host’s cache purge where needed. Previous saved deployments may retain copies.

Changing a filename changes its URL. Add an explicit host redirect for previously published URLs. Keep internal fixtures under `tests/`, never in production content folders. All public lists, routes, RSS and sitemap must use `src/lib/content.ts` so publication rules are consistent.
