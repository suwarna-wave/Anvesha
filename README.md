# CLTS website

A lightweight editorial website for the **Centre for Liberty, Technology and Society**, a Nepal-based initiative. Built with Astro 7.4.5, strict TypeScript, Tailwind CSS 4 and Markdown content collections. Pages are pre-rendered HTML; only menu enhancements and publication link copying need small browser scripts.

## Run locally

Use **Node 22.23.4 or newer** and npm 9.6.5 or newer. `.nvmrc` pins the tested Node version.

```sh
nvm use                  # optional, if you use nvm
npm ci
cp .env.example .env
npm run dev
```

Open `http://127.0.0.1:4321`. No service credentials are needed. On npm versions that restrict dependency scripts, the committed `allowScripts` entry permits esbuild’s platform setup. Never approve unfamiliar scripts without inspection.

```sh
npm run check            # Astro and TypeScript
npm run lint             # ESLint, including Astro components
npm test                 # Publication, schema and registration rules
npm run format:check     # Prettier
npm run build            # Static output in dist/
npm run test:site        # Validate generated pages and internal references
npm run test:integration # Isolated fixtures: detail routes, feeds and config
npm run preview          # Preview the production build
npm run test:browser     # Responsive, axe accessibility and interaction tests
```

Browser tests use Playwright’s Chromium by default. Run `npx playwright install chromium` once, or set `CHROME_PATH` to an installed Chrome executable. The test runner starts the production preview automatically; build first. Generated screenshots and reports are ignored by Git.

## Structure and extension

```text
src/
  components/            # layout, UI, content and inquiry components
  content/               # editorial Markdown, pillar taxonomy and shared copy
  layouts/               # document shell, fonts, metadata, header and footer
  lib/                   # organisation settings, schemas and publication rules
  pages/                 # static routes, detail templates, sitemap, RSS, robots
  styles/                # design tokens, shared styles and responsive rules
public/                  # favicon, social preview, approved documents and images
content/README.md        # publishing instructions and safe copyable examples
scripts/                 # generated-site validation and asset generation
tests/                   # internal tests; never a content collection
```

`organization.ts` owns identity, navigation and verified contact settings. `pillars.ts` owns the five canonical focus areas; use its identifiers everywhere. `site-copy.ts` holds reusable research questions, working principles and collaboration models. Route components compose these with page-specific editorial text.

Add a new page using `SiteLayout` and `PageHeader`; add its navigation link only if it has useful content. Update the sitemap’s static route list and browser route coverage when adding a public page. Keep styles in shared tokens and semantic component classes; Tailwind utilities are available for small layout adjustments. No CMS, database, accounts or runtime backend are required.

## Content publishing

See [the editorial guide](content/README.md). Add Markdown files to `src/content/insights`, `events` or `initiatives`; no unrelated route changes are required. Schemas validate metadata during builds. All public consumers use `src/lib/content.ts` and its central selection policy. Never call an unfiltered collection from a public page.

- Drafts and future-dated insights stay out of public pages, feeds and sitemap.
- Planned or draft events do not generate pages. Confirmed cancelled events remain visible with registration closed.
- Registration is available only for open events with a real HTTPS destination, a future start and an unexpired deadline.
- Empty collections are intentional. Astro may print “No files found” warnings until real content is supplied.
- Static builds must be rerun to publish, unpublish or change scheduled/expired content. Event registration availability is calculated at build time: rebuild at deadlines/start times, or let the external registration provider enforce closure. Do not use this static site as a capacity-management system.

## Configuration

Copy `.env.example` to `.env`. Never commit actual secrets.

| Variable               | Default | Effect                                                                                                                       |
| ---------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `SITE_URL`             | empty   | Verified HTTPS origin, such as your eventual domain; enables absolute canonical and social URLs. No path allowed.            |
| `PUBLIC_INDEXABLE`     | `false` | Set to `true` only after launch approval. Requires `SITE_URL`; enables indexing, sitemap entries and public structured data. |
| `PUBLIC_CONTACT_EMAIL` | empty   | Verified public inbox. Enables clearly labelled `mailto:` links, not a submission form.                                      |

`PUBLIC_*` values are public build configuration. Do not place provider keys there. A bad email or invalid site origin fails the build. Preview pages default to `noindex, nofollow` and `robots.txt` disallows crawling. These directives are **not access control**; use your host’s password protection for confidential previews. RSS is populated only when indexing is enabled and approved publications exist.

No online inquiries, newsletter, payments, analytics or social integrations are currently activated. Without a verified inbox, contact sections explain that the contact channel is forthcoming and do not collect visitor data.

## Deploy

1. Complete [LAUNCH_CHECKLIST.md](LAUNCH_CHECKLIST.md), including the contact mechanism and privacy review.
2. Configure the verified production origin, public email and indexing setting in the host’s build environment.
3. Use Node 22.23.4+, install with `npm ci`, and build with `npm run build`. Publish **`dist/`** to a static host.
4. Configure the host to return `404.html` with HTTP 404 for missing routes. Do not enable an SPA catch-all rewrite.
5. Apply the headers in `public/_headers` if your host supports that file; otherwise copy them into the server/CDN configuration. The Astro preview server does not apply this host-specific file. CSP currently forbids forms and third-party scripts; deliberately revise it if approved services are added.
6. Verify HTTPS, canonical origin, contact links, headers, unknown routes and mobile navigation on the deployed domain. Retain the previous deployment for rollback.

Static content and sources live in Git. Use pull requests, editorial review and deploy previews; restore a previous revision to roll back. Back up approved documents along with content. No database migrations are needed. Recheck dependencies with `npm audit`; the lockfile pins the tested dependency graph. `minimatch` and `glob` overrides select patched versions used by development tools; revisit on tool upgrades.

## Future form delivery

Keep the static email fallback until a delivery provider, recipient, hosting runtime and retention policy are approved. A future server endpoint must validate input, enforce body limits, check origin, rate-limit, use a honeypot, keep secrets server-side, avoid logging message bodies and confirm success only after delivery-provider acceptance. It also needs labelled fields, accessible errors, retry states and an end-to-end test using a safe recipient. Update privacy copy and CSP at the same time. No simulated submission code is included.

## Design and language

The proposed CLTS mark and SVG “digital commons” illustration are original code-native assets pending founder approval. Fonts are self-hosted, Latin subsets of Manrope and Inter under their package licences. The social preview is generated from original SVG with `npm run assets:og`. No photos or third-party activity imagery are used.

English uses British spelling. Keep future translations in locale-specific content and routes with reviewed copy, language metadata and hreflang. Add a language switcher only when translated pages exist. Add a Devanagari subset when Nepali content is introduced.

## Quality and launch status

See [QA.md](QA.md) for measured results and limitations, [FACTS.md](FACTS.md) for the verification register and [LAUNCH_CHECKLIST.md](LAUNCH_CHECKLIST.md) for outstanding founder decisions. This repository is a functioning local website; public launch depends on verified contact information, domain, hosting and content/legal review.
