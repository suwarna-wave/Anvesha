# Validation report

This is a locally built, launch-stage website. Public hosting, inbox ownership, organisational facts and legal approval remain outside the verified implementation.

## Automated checks

- Astro/TypeScript check: **0 errors, 0 warnings, 0 hints**.
- ESLint: passed.
- Content-policy/schema tests: **6 passed**, covering draft/future publication exclusion, author/date requirements, taxonomy and report paths, event chronology and registration closure.
- Isolated integration build: passed publication and event detail rendering, source/byline output, configured email, `.env` loading, canonical URLs, structured data, RSS, sitemap and draft exclusion. Demonstration records are generated only in a temporary project and removed afterwards.
- Production build: **11 HTML pages** plus robots, sitemap, RSS and assets. Empty content-collection warnings are expected until real publications/events/initiatives exist.
- Generated-site validation: **11 HTML pages and 332 local references** checked. No missing internal page, asset or tested anchor; one H1 and description per page; no inquiry form or internal test content in output.
- Browser suite: **11 passed** using installed Google Chrome and Playwright. All ten main routes were checked at **320, 390, 768, 1280 and 1440px** for successful responses, H1 and horizontal overflow.
- Axe scans: **no detected WCAG A/AA violations** across the ten main routes at 390px and 1280px, including an explicit visible-label/accessible-name check.
- Interaction checks: skip link, mobile menu keyboard navigation, Escape/focus return, no-JavaScript menu navigation, unavailable inquiries, preview noindex, real 404, reduced motion and enlarged-text reflow passed.
- Dependency audit after patched development dependency overrides: **0 reported vulnerabilities** at verification time.

## Visual review

Reviewed full-page homepage screenshots at desktop and mobile widths, plus mobile Partnerships and desktop Contact. The test suite also captures About, Contact and Partnerships at 390px and 1280px. Screenshots are local QA artifacts under `qa-artifacts/`, intentionally ignored by Git.

The first browser pass found an active-navigation contrast regression and enlarged-text overflow; both were corrected and the full browser suite passed afterwards. A Lighthouse visible-label mismatch in the wordmark was also corrected and rechecked.

## Initial-build mobile Lighthouse

Measured against the local **production preview**, using Lighthouse 13.6.0, its default mobile emulation/throttling and installed headless Chrome. These are synthetic lab observations, not field Core Web Vitals or guarantees for a future host.

| Route | Performance | Accessibility | Best practices | SEO | LCP   | CLS   | Total blocking time |
| ----- | ----------- | ------------- | -------------- | --- | ----- | ----- | ------------------- |
| Home  | 100         | 100           | 100            | 63  | 0.8 s | 0.001 | 0 ms                |
| About | 100         | 100           | 100            | 63  | 0.8 s | 0.002 | 0 ms                |

SEO is reduced because this preview deliberately blocks indexing through both page metadata and robots. Keep that protection until the launch checklist is complete. Canonical and indexing-enabled behaviour were checked in the isolated integration build; remeasure SEO on the approved deployment rather than removing preview protections to inflate a score.

Raw reports are available locally as `qa-artifacts/lighthouse-home.json` and `qa-artifacts/lighthouse-about.json`.

## Limits and follow-up

- No independent accessibility certification, screen-reader audit, physical-device testing or cross-browser audit has been performed. Axe and Lighthouse do not establish complete WCAG conformance.
- Detail templates are tested with isolated fixtures; there is no approved publication/event to inspect as live organisational content.
- No form or newsletter delivery is claimed or tested. Configured email links were tested with a reserved example address in the isolated build, not a real Anvesha inbox.
- Security-header configuration is supplied for deployment. Astro preview does not apply the host-specific `_headers` file; verify actual response headers on the chosen host.
- Static event state, dates and registration availability require rebuilds. The external registration provider must independently enforce closure and capacity.
- Privacy/legal review, verified contact, production domain and hosting settings remain launch requirements. No public deployment was requested or performed.

## Anvesha rebrand verification

The public name, wordmark, primary line and supporting copy were updated to Anvesha. Shared brand copy now lives in `src/content/brand.json`; the homepage, metadata, organisation settings and generated SVG/PNG social preview use it. Reusable navigation, footer and inquiry labels use the organisation name.

- Production build, lint, type checking and formatting passed.
- All 6 content-policy tests and the isolated integration build passed.
- All 11 browser tests passed after the wordmark’s accessible label was corrected, including five responsive widths, mobile/desktop axe scans, enlarged text and keyboard/no-JavaScript interactions.
- Generated-site checks passed for 11 HTML pages and 332 local references.
- Source and production-output scans found no previous public-name or old primary-tagline references. Desktop/mobile homepage screenshots and the regenerated social preview were visually reviewed.
- Lighthouse figures above describe the initial build, before the rename; performance was not remeasured for this branding edit.
