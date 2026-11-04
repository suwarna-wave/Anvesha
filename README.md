# Anvesha website

A lightweight editorial website for the **Anvesha**, a Nepal-based initiative. Built with Astro 7.4.5, strict TypeScript, Tailwind CSS 4 and Markdown content collections. Pages are pre-rendered HTML; only menu enhancements and publication link copying need small browser scripts.

## Run locally

Use **Node 22.23.4 or newer** and npm 9.6.5 or newer. `.nvmrc` pins the tested Node version.

```sh
nvm install              # install the version pinned in .nvmrc
nvm use                  # select it in this terminal
npm ci
cp .env.example .env
npm run dev
```

If you use a different Node version manager, select Node 22.23.4 or newer before running these commands. Existing terminals keep their selected Node version until you run `nvm use` or open a new terminal.

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

Browser tests use Playwright’s Chromium by default. Run `npx playwright install chromium` once, or set `CHROME_PATH` to an installed Chrome executable. The test runner starts its own production preview on port 4322; build first. Keep that port free. It does not reuse your development server, so development-toolbar elements cannot affect the production checks. Generated screenshots and reports are ignored by Git.

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

`src/content/brand.json` owns the public name, descriptor, tagline, mission and default description. `organization.ts` combines this with navigation and verified contact settings. `pillars.ts` owns the five canonical focus areas; use its identifiers everywhere. `site-copy.ts` holds reusable research questions, working principles and collaboration models. Route components compose these with page-specific editorial text.

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

| Variable               | Default | Effect                                                                                                                                                       |
| ---------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `SITE_URL`             | empty   | Verified HTTPS origin, such as your eventual domain; enables absolute canonical and social URLs. Use an origin only; put the repository path in `BASE_PATH`. |
| `BASE_PATH`            | `/`     | Project path, e.g. `/anvesha/`; Pages workflow reads it from GitHub automatically.                                                                           |
| `PUBLIC_INDEXABLE`     | `false` | Set to `true` only after launch approval. Requires `SITE_URL`; enables indexing, sitemap entries and public structured data.                                 |
| `PUBLIC_CONTACT_EMAIL` | empty   | Verified public inbox. Enables clearly labelled `mailto:` links, not a submission form.                                                                      |

`PUBLIC_*` values are public build configuration. Do not place provider keys there. A bad email or invalid site origin fails the build. Preview pages default to `noindex, nofollow` and `robots.txt` disallows crawling. These directives are **not access control**; use your host’s password protection for confidential previews. RSS is populated only when indexing is enabled and approved publications exist.

No online inquiries, newsletter, payments, analytics or social integrations are currently activated. Without a verified inbox, contact sections explain that the contact channel is forthcoming and do not collect visitor data.

## Deploy with GitHub Pages

The existing source layout is already suitable for Pages. Source stays in `src/`, public assets in `public/`, and Astro builds static output into ignored `dist/`. `.github/workflows/deploy-pages.yml` checks the source, builds and validates the site, uploads `dist/`, then deploys with GitHub’s official Pages actions. There is no separate `docs/` folder, committed build output or `gh-pages` branch.

### One-time repository setup

1. Rename the repository to **`anvesha`** in GitHub **Settings → General → Repository name**. This requires repository administration access. Renaming the local folder alone does not rename GitHub or its Pages URL.
2. In **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source. Keep **Enforce HTTPS** enabled when available. If the repository is private, confirm that your GitHub plan supports Pages; do not change source-code visibility just to deploy the site without an explicit decision.
3. Update your local remote after the repository is renamed:

   ```sh
   git remote set-url origin git@github.com:suwarna-wave/anvesha.git
   ```

4. Push `main`, or open **Actions → Deploy Anvesha to GitHub Pages → Run workflow**. Wait for both build and deploy to succeed. The deployment job reports the actual site URL.

Expected project URL after renaming: **https://suwarna-wave.github.io/anvesha/**. The workflow reads the origin and project path from GitHub Pages metadata, so it also supports the current repository name or a later approved custom domain without hard-coded path edits. If a repository is renamed after a deployment, run the workflow again. Pages project URLs do not inherit repository URL redirects.

### Public build settings

Optional repository **Settings → Secrets and variables → Actions → Variables**:

- `PUBLIC_CONTACT_EMAIL`: a verified public inbox; enables email links.
- `PUBLIC_INDEXABLE`: defaults to `false`. Set `true` only after the content, contact and privacy launch review is complete. Visitors can use a published URL while it remains excluded from indexing.

The workflow supplies `SITE_URL` and `BASE_PATH` from the Pages settings. No delivery-service secrets, personal access token or committed `.env` file are needed to build/deploy. Enabling Pages and renaming the repository are separate administrative actions; a normal workflow token cannot grant itself those permissions.

### Test the project path locally

```sh
SITE_URL=https://suwarna-wave.github.io BASE_PATH=/anvesha/ npm run build
BASE_PATH=/anvesha/ npm run test:site
BASE_PATH=/anvesha/ npm run test:browser
BASE_PATH=/anvesha/ npm run preview
```

Open `http://127.0.0.1:4321/anvesha/`. Shell variables apply to one command. For ordinary local development, leave `BASE_PATH=/` in `.env`. To return the production preview to a root build, run `npm run build` again without the project-path override.

Internal links, assets, downloads, canonical URLs, social previews, sitemap and RSS respect `BASE_PATH`. Use `sitePath()` from `src/lib/urls.ts` when adding authored links in Astro components; external URLs, email links and same-page fragments are preserved. Standard Markdown links/images are prefixed by the configured Markdown processor. Prefer standard Markdown links to raw HTML in editorial content.

GitHub Pages serves `404.html` for missing project pages. It does not support arbitrary custom HTTP headers or `_headers` files. `deploy/headers.example` is an optional reference for alternative hosts that support custom headers; it is deliberately outside public output. Verify the actual deployed HTTPS responses rather than claiming those example headers are active on Pages.

Static sources and approved documents live in Git. Roll back by reverting the source commit and letting Actions deploy it. `dist/`, `.env`, caches and browser reports stay ignored. Recheck dependencies with `npm audit`; the lockfile pins the tested graph. `minimatch` and `glob` overrides select patched versions used by development tools; revisit on upgrades.

### Local folder name

For a fresh checkout, the renamed repository clones into an `anvesha` folder. Existing checkouts can also be renamed to `anvesha` after stopping their development server and closing the old workspace; reopen the renamed folder in your editor. The folder’s name does not affect the site’s public identity or deployment.

## Future form delivery

Keep the static email fallback until a delivery provider, recipient, hosting runtime and retention policy are approved. A future server endpoint must validate input, enforce body limits, check origin, rate-limit, use a honeypot, keep secrets server-side, avoid logging message bodies and confirm success only after delivery-provider acceptance. It also needs labelled fields, accessible errors, retry states and an end-to-end test using a safe recipient. Update privacy copy and CSP at the same time. No simulated submission code is included.

## Design and language

The proposed Anvesha mark and SVG “digital commons” illustration are original code-native assets pending founder approval. Fonts are self-hosted, Latin subsets of Manrope and Inter under their package licences. The social preview SVG and PNG are generated from the shared brand settings with `npm run assets:og`; regenerate them whenever branding changes. No photos or third-party activity imagery are used.

English uses British spelling. Keep future translations in locale-specific content and routes with reviewed copy, language metadata and hreflang. Add a language switcher only when translated pages exist. Add a Devanagari subset when Nepali content is introduced.

## Quality and launch status

See [QA.md](QA.md) for measured results and limitations, [FACTS.md](FACTS.md) for the verification register and [LAUNCH_CHECKLIST.md](LAUNCH_CHECKLIST.md) for outstanding founder decisions. This repository is a functioning local website; public launch depends on verified contact information, domain, hosting and content/legal review.

## Visual restraint

Use typography, spacing, fine rules and standard lists for supporting content. The original pyramid illustration in `src/assets/commons-pyramid.svg` is reserved for the homepage hero and social preview; `npm run assets:og` keeps those in sync. Keep it static and lightly tinted. Avoid repeating the shape in headings, numbered lists, bullets or calls to action, and do not use its levels to imply status or impact.
