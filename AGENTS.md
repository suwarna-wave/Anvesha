# AGENTS.md — Anvesha Website: Product, Design, Content & Engineering Brief

> **Read this entire file before changing the project.** This is the source of truth for an AI coding agent commissioned to build or improve the public website of **Anvesha**, a Nepal-based, emerging nonprofit / civic-tech policy and research initiative.
>
> **Your assignment is to deliver a working, polished, maintainable website—not merely a design concept, a few components, or an implementation plan.**
>
> **Name verification:** The founder has renamed the public brand to **Anvesha**. Use Anvesha consistently, without an acronym or expanded institutional name. The registered legal name and status remain unverified; use documentary evidence in legal contexts.

---

## 0. Mission and definition of success

Build an **exceptionally credible, visually distinctive, calm, lightweight, inclusive, accessible, and useful** digital home for Anvesha. A visitor should understand within five seconds:

1. **What Anvesha stands for:** individual liberty, human dignity, responsible technological progress, evidence-led public policy, legal literacy, and an open, innovative society.
2. **What Anvesha does:** policy research and recommendations, public dialogues, capacity-building and digital skills training, policy hackathons, workshops, convenings, and cross-sector partnerships.
3. **How to engage:** explore ideas, attend an event, collaborate, submit an inquiry, join a community, or discuss institutional/grant support.

The site must feel **like a respected international think tank with the energy of a contemporary technology lab**, informed by Nepal, useful to regional and global audiences, and welcoming rather than ideological or partisan.

**Website success is measured by clarity, trust, accessibility, meaningful actions and content maintainability—not number of animations, UI components, pages, or lines of code.**

### Never do these things

- Never fabricate grant awards, legal registrations, Social Welfare Council affiliation, government approvals, public figures' endorsements, partners, sponsors, donors, research publications, impact statistics, board members, testimonials, event attendance, or past events.
- Never quietly present aspirational programs as completed achievements. Distinguish **focus areas**, **planned initiatives**, **active work**, and **completed work**.
- Never publish a working **Donate / Pay Now** button before Anvesha has verified its eligibility, approval requirements, receiving account, compliance process, and payment provider.
- Never imply Anvesha is a government body, a regulator, a registered charity in a foreign jurisdiction, or the recipient of any form of tax-deductible gift without documentary evidence.
- Never use fake logos, stock photos posed as Anvesha activities, invented citations, or empty “impact numbers.”
- Never create fake functionality: a nonworking newsletter box, a submit button without delivery, broken links, fake registration forms, or an empty CMS that only the developer understands.
- Never overbuild: no unnecessary dashboard, accounts, 3D engine, heavy scroll-jacking, giant hero video, excessive libraries, or microservices.

---

## 1. Organization: intended identity and positioning

### Working identity

- **Name:** Anvesha
- **Public brand:** Anvesha (no acronym)
- **Base:** Nepal; designed to engage South Asia and the international technology-policy ecosystem
- **Institutional model:** nonprofit policy / research / dialogue / training / civic innovation initiative. **Exact legal status is unverified until the founders provide documents.**
- **Orientation:** rights-respecting, liberty-minded, evidence-led, open to constructive engagement across perspectives, committed to the rule of law and legitimate public interest.
- **Tone:** authoritative but human, optimistic but realistic, intellectually independent, grounded in evidence, welcoming of informed disagreement.

### One-sentence explanation

> Anvesha brings research, dialogue and practical learning together to help people and institutions navigate emerging technologies while protecting liberty, strengthening public trust and working within the rule of law.

### Recommended brand line

> **Inquiry for a better digital society.**

### Optional secondary line

> **Research. Dialogue. Discovery.**

Do not display all taglines at once. Pick one primary expression; use supporting copy to explain it.

### The five program pillars

Use a coherent taxonomy across navigation, homepage, programs, related articles, and inquiry-form interests:

1. **Digital Liberty & Rights** — privacy, freedom of expression, digital autonomy, internet governance, cybersecurity awareness, digital inclusion.
2. **Technology & Public Policy** — evidence-led research, policy literacy, regulatory dialogue, AI governance, civic technology, innovation policy.
3. **Learning & Capacity Building** — training, workshops, fellowships *if established*, policy bootcamps, educator/community sessions, responsible technology adoption.
4. **Dialogue & Public Engagement** — public forums, multi-stakeholder discussions, policy roundtables, debates, technology-and-society events.
5. **Civic Innovation & Hackathons** — policy hackathons, public-interest technology challenges, collaborative prototyping, interdisciplinary labs.

These are **focus areas**, not proof that Anvesha has already implemented all five. Admin/editor content must support `planned`, `active`, and `completed` states.

### Intellectual character

Anvesha can value liberty without reducing every topic to a slogan. Treat liberty, safety, accountability, innovation, accessibility, legality, democratic participation, and evidence as subjects for serious, sometimes competing policy choices. Make space for informed debate. Avoid party-political branding and advocacy copy implying all legal questions have a simple answer.

---

## 2. Audiences and conversion journeys

Every important visitor must have an obvious next step:

| Visitor | Their question | Appropriate path / CTA |
|---|---|---|
| International foundation / grantmaker | Is Anvesha credible, aligned, accountable and contactable? | **Partner with Anvesha** → mission, program priorities, governance/transparency, partnership inquiry |
| University / research institute | Can we commission, co-author or host research? | **Explore Research** → themes / publications → **Discuss Collaboration** |
| Government or policymaker | Is the analysis balanced and useful? | **Insights & Policy** → publication detail / event → contact |
| Technologist / startup / civic builder | Where can I contribute or learn? | **Programs & Events** → hackathons / workshops → registration or interest form |
| Student / early-career professional | Can I join a program, volunteer or attend? | **Get Involved** → opportunities / newsletter |
| Journalist / public reader | What does Anvesha think about an issue? | **Insights** → clear article pages, author/date/sources, media contact |
| Potential institutional partner | What can we do together? | **Partnerships** → collaboration models and concise inquiry |

### Site-wide calls to action

- **Primary institutional CTA:** `Partner with Anvesha` (or `Explore Partnerships`).
- **Primary general-interest CTA:** `Explore Our Work`.
- **Contextual CTAs:** `Read the Research`, `View Events`, `Join a Conversation`, `Propose a Collaboration`, `Get Updates`.
- Use **one visually dominant CTA** per section, not three equally strong buttons.
- Every CTA must link to a real page, anchor, working form, or approved external destination.

### Conversion outcomes to support

Track only privacy-respecting, consent-appropriate events such as successful partnership inquiry, successful contact inquiry, event registration click/completion, publication download, and newsletter signup. Do not turn the site into a sales funnel. Prioritize trust over pressure tactics.

---

## 3. Brand and art direction — a distinctive but restrained system

### Desired visual impression

Think **editorial research institute × human-centered civic technology × South Asian intellectual confidence**. It should feel contemporary and internationally credible in 2026, not a generic Bootstrap NGO theme.

**Creative keywords:** precise, calm, luminous, civic, forward-looking, approachable, intentional, independent, confident, clear.

**Avoid:** generic blue-purple startup gradients, neon cyberpunk, overwhelming glassmorphism, blobs everywhere, giant stock handshake photos, AI-generated fake workshops, fake world maps of “our impact,” noisy backgrounds, tiny unreadable text, icon overload, giant shadows, layout shifts and repeated card grids.

### Suggested color tokens (adjust after contrast testing)

| Token | Initial direction | Use |
|---|---|---|
| `--ink` | `#102638` | Main typography / deep backgrounds |
| `--paper` | `#F8F9F5` | Primary warm off-white background |
| `--surface` | `#FFFFFF` | Cards / elevated surfaces |
| `--teal` | `#0E726C` | Interactive emphasis; verify AA contrast |
| `--gold` | `#D8A451` | Restrained accent, rules, graphic detail—not body text |
| `--mist` | `#E6EEEB` | Quiet section tints |
| `--line` | `#D8E2DE` | Subtle borders |

Use a **mostly light theme** with one deep-ink feature section and strategically placed teal/gold accents. Dark mode is optional; do not compromise launch quality to add it. Use CSS variables and accessible contrast, not hard-coded colors scattered across components.

### Typography

- Main headings: **Manrope** or another well-crafted modern sans with confident, tight but readable display typography.
- Body/UI: **Inter**, **Source Sans 3**, or comparably legible, lightweight type.
- Optional editorial accent: **Newsreader** for an occasional short quotation or highlight only—not whole pages.
- Support Devanagari with **Noto Sans Devanagari** or equivalent if/when Nepali content is added.
- Prefer variable font subsets, at most two families for launch, and predictable loading behavior.
- Body 16–18px, ample line height; readable line length ~60–75 characters; headings responsive via `clamp()`.

### Layout language

- Max editorial content width around 1120–1200px; body text narrower.
- Generous vertical rhythm; consistent 8px-ish spacing scale.
- Strong left alignment and clear typographic hierarchy.
- Alternating editorial composition: some split layouts, some full-width statements, some structured cards; **not identical cards in every section**.
- Mobile first. A remarkable 390px experience matters more than a fancy 1440px screenshot.
- Sticky or floating header only if it stays small, non-obstructive and useful.

### Signature visual / ownable identity

Create an original, lightweight **“digital commons” motif**: an elegant SVG or CSS-based line-and-node system connecting **people, public policy and technology**. The graphic should communicate openness, connections, and thoughtful systems—not surveillance or futuristic gimmicks. It can subtly evolve between hero, section dividers, and page headers.

Ideas for culturally grounded subtlety: geometric patterns inspired by Nepali architecture, layered landscape-like contours, or locally meaningful visual rhythm, reinterpreted abstractly. **Avoid turning the brand into a tourism website** or using sacred symbols decoratively without context.

The wordmark should say `Anvesha` cleanly; any icon/mark must work at favicon size and in monochrome. Until the organization approves a logo, treat the built icon as a **proposal**, not an official adopted logo.

### Motion principles

- Only small, purposeful animations: soft enter transitions, hover states, subtle active-link indicator, slowly moving network detail if tasteful.
- All interactions fully work with motion disabled; obey `prefers-reduced-motion`.
- No autoplay video, scroll-hijacking, delayed content reveal that hides information, or flashy continuous effects.
- Animation must not degrade battery, responsiveness or accessibility.

### Images and illustrations

- Favor authentic founder-approved photos of real Anvesha activities, Nepal civic-tech context, people collaborating, and documentation from events **with permission and consent**.
- Where genuine photos do not exist, use original line-art, abstract geometry, typographic treatment, and a curated visual system.
- Never use photos from unrelated events as if they depict Anvesha's work. Any licensed third-party image should be clearly appropriate, accessible, and credited when required.
- Responsive image sizes, modern formats, meaningful alt text, and sensible art direction are required.

---

## 4. Information architecture — elegant and scalable

Keep the top navigation lean. Suggested desktop navigation:

`About` · `Our Work` · `Insights` · `Events` · `Get Involved` · **`Partner with Anvesha`**

On mobile use an accessible, thoughtfully designed menu with visible focus, no trapped tab order, and enough touch target space.

### Required public routes / templates

| Route | Purpose | Priority |
|---|---|---|
| `/` | High-impact homepage, clear mission and pathways | P0 |
| `/about` | Mission, values, approach, people and governance when verified | P0 |
| `/our-work` | The five pillars, projects/initiatives, status and outcomes | P0 |
| `/insights` | Research papers, explainers, articles, policy briefs; filters | P0 |
| `/insights/[slug]` | Excellent accessible publication detail | P0 |
| `/events` | Upcoming and past events, including gracefully empty states | P0 |
| `/events/[slug]` | Event detail, speakers, program, location/time, registration if available | P1 / template ready |
| `/get-involved` | Individuals: volunteering, participation, collaboration interest | P0 |
| `/partnerships` | Donor / institutional partnership page; credibility and inquiry | P0 |
| `/contact` | Working inquiries and contact information | P0 |
| `/privacy` | Plain-language privacy notice; reviewed before launch | P0 |
| `/accessibility` | Accessibility commitment and reporting channel | P1 |
| `/terms` | Terms / disclaimer if legally needed; reviewed before launch | P1 |
| `/404` or framework equivalent | Helpful navigation and search route back | P0 |

Optional after launch: `/people`, `/transparency`, `/resources`, `/newsletter`, `/opportunities`, `/media`, `/ne`, topical pages and programs/project detail routes. **Do not create navigation destinations with no useful real content.** A future page can stay unpublished or be represented by a well-written section on another page.

### Footer

Include identity and one-line mission, useful nav links, `Contact`, `Privacy`, `Accessibility`, approved social channels, confirmed Nepal location, and copyright. Include registration/affiliation details **only if verified and intended for public disclosure**. Make the footer a genuine navigation aid, not a dead-end decoration.

---

## 5. Homepage — exact narrative and UX requirements

The homepage is an editorial story with roughly **7–9 purposeful sections**. It must not be a wall of text or a marketing cliché. Prioritize this order:

### 5.1 Navigation

Minimal logo lockup, clear primary links, `Partner with Anvesha` highlighted. Keyboard-accessible mobile menu. Optional announcement strip **only for real announcements**.

### 5.2 Hero: high clarity and a memorable visual

**Eyebrow:** `Research. Dialogue. Discovery.`

**Headline:** `Inquiry for a better digital society.`

**Subheading:** `We connect public policy research, practical technology learning and open dialogue to help society embrace innovation while protecting rights and the rule of law.`

**CTAs:** `Explore Our Work` and `Partner with Anvesha`.

**Visual:** original lightweight digital-commons motif, ideally alongside typography rather than covering it. At small widths the text is first, motif secondary.

**Trust anchor:** modest, factually grounded `Based in Nepal · Engaging across technology, liberty and society` (not awards/partner logos invented for appearance).

The above is approved **draft positioning copy**, not factual proof of any completed work.

### 5.3 Why Anvesha exists

Headline: `Technology changes what is possible. Society decides what is right.`

In 2–3 brief sentences, explain how emerging technologies create opportunity **and** new questions about rights, access, trust, skills and legal safeguards. Anvesha links policy insight with human capability and responsible action.

### 5.4 What we focus on

Introduce the five pillars in a high-quality editorial grid/list with concise descriptions, distinct but simple iconography, and meaningful links. Do not use five giant near-identical cards with empty decorative icons.

### 5.5 From ideas to action

Visually describe the practical Anvesha cycle, e.g. **Research → Convene → Build Capacity → Experiment → Learn & Share**. Include concrete types of work (policy dialogues, training, hackathons), and make clear which are current and which are intended programs.

### 5.6 Featured insights or research direction

- If real published work exists, show 2–3 approved articles/reports with date, category and reading time.
- If none exists, show a carefully labeled `Questions we're exploring` editorial section—**never pretend draft topics are published research**.
- Link to the `/insights` page.

### 5.7 Upcoming opportunities or events

- If real scheduled events exist, show the next 1–3 by date, with registration links.
- Otherwise display an elegant `Conversations and programs are taking shape` invitation with `Express Interest` / `Get Updates`, only when that destination functions.
- No fake “Coming Nov 2026” date or invented speaker.

### 5.8 Collaboration / partnerships

Headline: `Change happens across disciplines.`

Briefly invite research institutions, educators, public agencies, technologists, civil society, funders and foundations to co-design impactful work. CTA `Explore Partnerships`.

### 5.9 Newsletter / closing CTA + footer

One calm message and single meaningful action; if no configured newsletter integration, present an email link or `Get in touch` instead. Do not deploy a fake signup UI.

**Mobile rule:** first-screen content should show the name, clear mission and at least one actionable button without requiring an oversized hero illustration to load.

---

## 6. Required page content and behavior

### 6.1 `/about` — earn trust without exaggeration

Sections: concise mission, the problem Anvesha addresses, values, approach (`research + dialogue + learning + experimentation`), intended beneficiaries, Nepal/global perspective, people/governance (only verified information), and one collaboration CTA.

Distinguish clearly among:

- **Mission** — what Anvesha exists to advance.
- **Vision** — the future it hopes to contribute to.
- **Principles** — liberty, evidence, openness, responsibility, inclusion, the rule of law.
- **Activities** — work actually underway or planned (accurately labeled).

If members, board or advisers are not provided, **do not create fake profiles or placeholder silhouette grids on a public page**. A short founder-approved organizational statement is more credible.

### 6.2 `/our-work` — programs that explain actions, not buzzwords

Use five clearly defined pillars, each with:

- One-sentence outcome / public problem.
- Key questions and example activities.
- Intended audiences or partners.
- Status: `Exploring`, `Planning`, `Active`, or `Completed`, only when supported.
- Related research, events or projects when real content exists.
- Specific, low-friction `Discuss a project` / `Join an event` CTA.

Possible thematic subtopics to support tagging (do not pretend each is a funded project): AI and algorithmic governance; privacy and data protection; digital public infrastructure; cybersecurity awareness; digital inclusion; open internet; youth technology literacy; platform governance; innovation-friendly regulation; digital autonomy and civic trust.

Avoid claiming Anvesha provides formal legal advice, accredited certification, or regulated cybersecurity services unless verified.

### 6.3 `/insights` and `/insights/[slug]` — editorial credibility

Content types: `Policy Brief`, `Research`, `Explainer`, `Commentary`, `Event Reflection`, `Resource`.

Index should support easy scanning: title, short summary, type, date, author when verified, topic tags, optional search/filter without sluggish client bundles. If fewer than ~8 entries, avoid elaborate filters.

Each detail page requires:

- H1, a concise deck/summary, verified author/byline, published/updated dates, type and topic.
- Readable prose with proper H2/H3 structure, accessible figures and captions, citations and sources.
- Optional report PDF download only for an actual document with proper metadata.
- `Key takeaways` if warranted and genuinely derived from the content.
- Share/copy link, back to insights, related content only where relevant.
- For policy analysis, clearly differentiate evidence, interpretation, recommendations and uncertainty.
- No fabricated references, AI-generated “data” without source, or synthetic quotations.

Use DOI/official references where available. Do not backdate sample content to seem established. Treat missing actual research content as a legitimate empty state; the website can still be excellent.

### 6.4 `/events` and `/events/[slug]`

Provide `Upcoming` and `Past` content grouping, with archived events only when verifiable. Events can include dialogue, roundtable, training, workshop, hackathon, public lecture.

Event detail: precise name, purpose, date/time (including `Asia/Kathmandu` and timezone labeling where relevant), physical venue or online platform, accessibility info if known, agenda/speakers only when confirmed, eligibility, capacity and registration deadline if applicable, contact and registration CTA.

If using an external registration system, clearly label the destination. If building an on-site form, do server-side validation, anti-spam, confirmations, minimal collection, consent and an auditable submission destination. Never show an enabled registration CTA for a closed event without making the state clear.

### 6.5 `/get-involved`

For students, researchers, makers, trainers, volunteers and community participants. Group actual opportunity types: attend programs, contribute research or expertise, volunteer (if volunteer onboarding exists), propose a dialogue/hackathon, sign up for updates. No fake open vacancies. When no opportunities exist, explain how to express interest in one compact working form or email route.

### 6.6 `/partnerships` — grantmaker-ready without pretending to accept funds today

This is a strategic priority. Speak to international foundations and credible domestic/international institutions in clear, sober English.

Recommended sections:

1. **Why Anvesha** — mission fit, local context, global relevance, interdisciplinary approach.
2. **Areas for collaboration** — commissioned/independent research, dialogue series, digital capacity-building, civic-tech labs, research fellowships **if planned and feasible**, hackathons, co-hosted programs.
3. **What collaboration can look like** — research partnership, institutional knowledge exchange, program sponsorship (subject to approvals), capacity-building partnership, grants/project support (subject to compliance).
4. **How Anvesha works** — proposed evidence standards, open dialogue, safeguards, monitoring and evaluation, safeguarding, privacy and financial accountability. Do not claim these policies are formally adopted if they are still drafts.
5. **Institutional information / due diligence** — after verification, contact details, registration and relevant approvals, governance and leadership, project portfolio, actual reports, financial statements, relevant policies, downloadable institutional profile.
6. **Inquiry form** — concise and reliable. Suggested fields: name, work email, organization, collaboration interest, message, optional timeline; consent statement. Explicit confirmation after successful delivery.
7. **Practical next step** — `Start a Partnership Conversation`.

When applicable, label the section `Partnership & Grant Conversations` rather than `Donate Now`. An NGO website can welcome **inquiries about grants** without making unverified representations that it can immediately accept international funds.

**Compliance gate:** Nepal-related nonprofit registration, Social Welfare Council processes, project-level foreign assistance permissions, public fundraising permissions, tax treatment, and permitted banking/payment pathways must be reviewed against current law and actual Anvesha documents before a donation/fund-transfer feature or explicit grant-eligibility promise goes live. The agent is not a lawyer. Document open questions and request founder/legal approval for these claims.

Suggested public phrasing: `Interested in supporting research, digital inclusion or public dialogue? We welcome conversations with foundations and institutional partners. Any funding arrangement is subject to applicable approvals and compliance requirements.`

### 6.7 `/contact`

- Verified email; do not invent `hello@...` unless domain and inbox are configured.
- Confirmed address / city only; `Nepal` is sufficient if no public office address exists.
- Working form with inquiry type: general, research, media, events, partnerships, grants, other.
- Clear success, error and resend/retry states, without exposing sensitive backend detail.
- Optional social links only to verified accounts.
- Say when information will be used, not an unverified promise of a 24-hour reply.

### 6.8 Legal, accessibility, and transparency

- Privacy notice must accurately describe forms, hosting, email tools, analytics, retention, consent/contact mechanism and cross-border data flows where relevant; obtain legal review before publishing.
- Accessibility page offers a practical reporting email and current standards/limitations without falsely certifying an audit.
- Terms / research disclaimers only if needed and reviewed.
- If legally and organizationally confirmed, provide a visible route to registration/governance/financial and reporting documents. Do not show fake document links or redact confidential documents incorrectly.

---

## 7. Editorial standards and sample content

### Writing rules

- Write for intelligent non-specialists; explain jargon instead of celebrating it.
- Use short direct headlines. Specific beats grandiose.
- Be **liberty-minded yet pluralistic**, with a professional research voice.
- Prefer `We convene experts and communities to examine...` to `We revolutionize the world through...`.
- Refer to Nepal and South Asia meaningfully, not constantly.
- Make pages scannable with helpful headings and small, purposeful components.
- Use British English spellings consistently (`Centre`, `programme` where appropriate) unless founders decide otherwise; preserve well-known field terms like `hackathon`.
- Avoid SEO keyword stuffing and formulaic AI copy.

### Suggested copy blocks (adapt, don't repeat everywhere)

**Short institutional description**

> Anvesha is a Nepal-based initiative working at the intersection of technological change, public policy and individual freedom. Through research, public dialogue, practical learning and collaborative innovation, Anvesha aims to advance a digital future that is open, inclusive, lawful and accountable.

**Why our work matters**

> The next generation of technology policy must do more than regulate risk or celebrate innovation. It must help people understand their choices, protect fundamental rights, build public capability and create space for new ideas to flourish.

**Collaboration invitation**

> We work best across disciplines. If your institution is exploring digital rights, responsible innovation, research, or practical technology education, we would welcome a conversation about building something useful together.

**No upcoming events**

> There are no publicly announced events at the moment. We are shaping future conversations and learning opportunities; get in touch if you would like to contribute or hear about what comes next.

**No publications yet**

> Our research and ideas hub is taking shape. In the meantime, explore the questions guiding our work or contact us to discuss a potential research collaboration.

### Editorial provenance

Build content from founder-approved facts. Keep a small `content/README.md` explaining how to publish, cite sources, set author/date/status, add a legal PDF and unpublish material. Mark any demonstration material as **internal test fixtures only**, and exclude it from the production build. Never fabricate realistic-sounding press releases or case studies.

---

## 8. Product UX requirements

### Navigation and wayfinding

- Always show current page and navigation location where useful.
- Distinguish button actions from text links; link labels must describe destinations.
- Every content page has an easy way to explore related work or return to the parent collection.
- Provide site search only if content size justifies it; otherwise clear navigation and lightweight filters are enough.
- Breadcrumbs on deep routes if useful; avoid complexity for a shallow site.
- External links are identified when meaningfully necessary; avoid surprise new tabs.

### States to design, not leave accidental

Default, hover, focus-visible, loading, successful submission, validation error, empty collection, event cancelled, archived content, missing media, not found, small-screen navigation, slow connection, reduced motion, and no-JavaScript where reasonable.

### Forms

- Ask only necessary information and label fields clearly.
- Server validation and safe error messages; accessible error summary for failed submissions.
- Anti-spam: honeypot + rate-limits and/or privacy-conscious challenge where needed.
- No client-only “success” on submission; confirm only after the backend actually accepts it.
- Never log personal message bodies or publish submissions.
- Explain consent and data use near the submit control, and provide a privacy link.
- Use real secrets in server environment variables; no keys in frontend bundles.

### Language

- Start with high-quality English for international partner reach.
- Architect routes and content for future **Nepali (नेपाली)** support. Add a language switcher **only after** translated pages exist; do not show an inert flag or broken language toggle.
- When Nepali content launches, use proper script support, hreflang tags, language attributes and reviewed translations (not unreviewed machine translations for legal/research material).

### Inclusion

- Responsive from 320px to large desktop.
- Finger-friendly tap targets and readable controls.
- Avoid device, location, high-speed internet and social account assumptions.
- Support ordinary users, students, older devices, low bandwidth and accessibility tools.

---

## 9. Engineering: preferred architecture and maintainability

### First inspect the repository

1. Read `README`, existing `AGENTS.md` files, package manager files, framework config, environment examples, content structure and deployment setup.
2. Determine what works; preserve existing conventions, design assets, integrations and good code.
3. If a project already exists, **improve it rather than rewrite it without a strong technical reason**.
4. Summarize your implementation choices in the final handoff.

### If this is a greenfield site

**Preferred default:** **Astro** (latest verified stable release at implementation time) + **TypeScript** + **Tailwind CSS** + **MD/MDX content collections** + tiny interactive islands as needed.

Why: this is primarily a content and information architecture website, not an authenticated web application. Favor static or prerendered pages, very low JavaScript, fast mobile delivery and straightforward editorial maintenance.

If the hosting platform, existing repository, or team conventions strongly favor React/Next.js, use a well-structured **Next.js App Router** implementation with comparable performance. **Do not migrate stacks just to follow this recommendation.** Verify current APIs/versions from official documentation rather than assuming old code examples remain valid.

### Architecture principles

- Reusable components: `SiteHeader`, `SiteFooter`, `Container`, `Button`, `PageHeader`, `SectionHeading`, `PillarItem`, `InsightCard`, `EventCard`, `CTASection`, `InquiryForm`, `EmptyState`, `ProseLayout`, `Tag`, `SEO`, `Icon`.
- Use design tokens, component variants, accessible HTML semantics.
- Content separated from presentation; no hard-coded large content arrays embedded in route components.
- Simple data contracts/schemas for articles, events, programs, organization settings, people/partners only when needed.
- No database for an editorial MVP unless an existing CMS or actual workflow requires it.
- No custom admin panel when content collections or a small hosted CMS will do.
- Add a user-friendly CMS only if staff explicitly need to publish without Git; choose a stable, low-maintenance option and document permissions, content review and backups.
- Strong TypeScript, formatter, linting and testing. Minimal dependencies.
- Use progressive enhancement; no loading screen required for the entire site.

### Suggested content model

`OrganizationConfig`
- verified brand name, short name, mission, contact channels, location, approved social links, legal status field **not visible unless verified**, optional registration references.

`Insight`
- slug, title, summary, type, status (`draft`/`published`), author(s), publication date, updated date, focus areas, body, citations, featured image and alt text, downloadable report (optional), featured flag.

`Event`
- slug, title, summary, type, state (`planned`/`open`/`full`/`cancelled`/`completed`), confirmed date and timezone, format, location/platform, access notes, agenda, organizer, verified speakers, registration URL/form when approved, related pillars.

`ProgramPillar / Initiative`
- slug, title, concise description, purpose, target audience, example activities, lifecycle state, related items, CTA.

`PartnershipInquiry`
- name, email, organization, inquiry topic, message, minimal consent record, created timestamp, anti-spam metadata **without unnecessary fingerprinting**. Store securely, retain only as long as policy allows, and configure who receives it.

Define schema validation; prevent unfinished/draft items from leaking to public lists, sitemap, RSS or structured data.

### Suggested project organization (adapt to framework)

```text
src/
  components/
    layout/
    ui/
    content/
    forms/
  content/
    insights/
    events/
    initiatives/
    config.*
  layouts/
  pages/
  styles/
  lib/
  assets/
public/
  favicon.*
  og-default.*
  documents/          # only approved public documents
  images/             # only licensed / approved images
scripts/
tests/
README.md
.env.example
AGENTS.md
```

### External services

- Newsletter: only integrate when an approved destination/list exists, with confirmed opt-in semantics.
- Contact/partnership form: use an approved email delivery or form provider, or a secure server endpoint. Never simulate success.
- Analytics: use privacy-conscious measurement by default; disable intrusive tracking. If a consent banner is legally necessary because of non-essential cookies/trackers, implement real consent controls rather than a decorative banner.
- Search: native/static first; add a provider only if content volume demands it.
- Payments: **excluded from initial scope** until founder/legal/compliance approval.
- Hosting: choose a reliable platform with HTTPS, easy deploys, logs, recovery and minimal operations overhead.

### Reliability and security

- Keep dependencies maintained and pinned by lockfile; enable routine audit.
- Sanitize untrusted content and constrain uploads / generated HTML.
- Validate and rate-limit public endpoints.
- Store secrets server-side; `.env.example` contains names only, never actual credentials.
- Implement accessible and safe error handling; no stack traces exposed to visitors.
- Protect contact mailboxes from spam; validate email format without excessive friction.
- Use appropriate security headers and protect against form abuse, CSRF where applicable, XSS and open redirects.
- Separate preview/draft and production content.
- Back up CMS/editorial content where used.

---

## 10. Performance, accessibility and SEO are non-negotiable

### Accessibility

Target **WCAG 2.2 AA** with honest manual and automated checking. Include:

- Semantic landmarks, correct heading hierarchy and one logical H1 per page.
- Keyboard navigation, visible focus indicators, skip-to-content link and non-trapping dialogs/menus.
- Appropriate accessible names for icons, controls and links.
- Contrast sufficient for text, icons and UI states; don't assume token colors automatically pass.
- Form labels, descriptive errors, feedback announcements when appropriate.
- Images with accurate alt text, captions/transcripts where appropriate.
- Respect zoom, reflow and reduced motion; no keyboard or touch barriers.
- Real testing, not a claim that merely running a linter proves compliance.

### Performance

Optimize for slow connections and modest mobile phones common across South Asia.

- Aim for **LCP ≤ 2.5s**, **INP ≤ 200ms**, **CLS ≤ 0.1** at the 75th percentile of real-user visits when enough data exists.
- Target mobile Lighthouse scores of **90+** for Performance, Accessibility, Best Practices and SEO on principal routes as a QA aspiration; document environment limits rather than doctoring metrics.
- Prefer static HTML, carefully sized compressed media, minimal JS, efficient fonts, lazy-load below-fold images, and stable image dimensions.
- Avoid third-party embed bloat and autoplay media.
- Run production builds and perform real device/browser smoke checks where tooling allows.

### Search and discoverability

- Unique descriptive title and meta description per page.
- Canonical URLs, social OG/Twitter previews, accessible share images and meaningful alt text.
- Valid sitemap, robots rules, favicons, search-engine-friendly routes.
- Use accurate structured data where supported: `Organization` or relevant subtype, `Article` / `BlogPosting`, `Event` for **real** events, `BreadcrumbList` when applicable. Never mark up fictitious data.
- Appropriate noindex for drafts, internal pages and staging.
- RSS feed for research/news if simple to maintain.
- Dates, authors, citations and update notes help research credibility.
- Make core content and essential navigation available without relying on client-side hydration.

---

## 11. Nepal-specific institutional and legal safeguards

Anvesha is intended to operate in Nepal. Legal and grant-eligibility claims are **founder/legal-review items**, not design flourishes.

### Before launch, verify with Anvesha leadership / qualified local counsel

- Exact registered legal name (including whether `Anvesha` is the legal spelling).
- Whether Anvesha is formally registered, in registration, affiliated with the **Social Welfare Council**, or operating under another lawful structure.
- The actual rules applicable to its nonprofit status, approvals, public fundraising, external grant acceptance, project agreements, and permitted international payment flows.
- Whether particular program descriptions, funding solicitations or foreign-partner language require approvals.
- Any obligations to publish particular governance, financial, audit or activity documents.
- Privacy/data collection requirements under Nepal's applicable privacy law, and contracts with form/newsletter/cloud providers.
- Truthfulness and approval of references to public bodies, institutions, individuals and donors.

### Research / verification starting points (do not substitute for legal advice)

- Nepal Social Welfare Council, NGO approval guidance: https://swc.org.np/pages/435
- Nepal Law Commission, Privacy Act, 2075: https://lawcommission.gov.np/content/12261/the-privacy-act-2075/
- Nepal government foreign aid policy reference (review current applicability and amendments): https://giwmscdntwo.gov.np/media/pdf_upload/Foreign%20Aid%20Mobilizatoin%20Policy_English%20Translation_v2_m9emeiw.pdf
- Accessibility: https://www.w3.org/WAI/standards-guidelines/wcag/
- Web performance: https://web.dev/articles/vitals

**Publication rule:** until legal status and fundraising permissions are established, the site may invite `partnership and funding conversations` but must not represent that Anvesha is already authorized to solicit, collect or disburse donations or foreign grants. Do not add legal boilerplate claiming universal compliance.

---

## 12. Responsive behavior and important details

### Desktop / wide

- Header comfortably fits without overcrowding.
- Hero has one memorable visual and highly legible text; imagery must not dominate the mission.
- Content widths and gutters stay consistent; no extremely long prose lines.

### Tablet

- Prevent orphaned cards and overlapping buttons.
- Break editorial splits at sensible points rather than blindly shrinking columns.

### Mobile

- High-quality navigation overlay/drawer or dropdown with correct focus management.
- Hero CTA accessible above or near first viewport; no tall empty gap.
- Cards/list rows collapse gracefully; forms use full-width controls.
- Sticky elements never cover content or consent messages.
- No horizontal scrolling at 320px unless a carefully contained data table explicitly supports it.

### Microinteractions

- Buttons and links have subtle, responsive focus/hover/active feedback.
- Toasts only for actual state changes and accessible announcements.
- No randomly animated counters or sliders just to create movement.

---

## 13. Measurement and editorial sustainability

If approved analytics is configured, define a minimal measurement plan:

- `partnership_inquiry_success`
- `general_inquiry_success`
- `newsletter_signup_success` (if applicable)
- `event_registration_click` or verified completion
- `publication_download`
- `insight_view` only if useful and privacy compliant

Never collect confidential messages in analytics events, do invasive tracking or insert unconsented marketing pixels. Keep a lightweight measurement glossary.

Support sustainable publishing with:

- Simple content templates and tagging.
- Clear “update” or archive flow for events.
- An easy process to add or correct staff/team details.
- Links checking and publication review.
- Optional scheduled editorial review of stale content.
- A short maintainer guide, not a huge bespoke system.

---

## 14. Implementation workflow — how the agent must work

**Do not stop at recommendations. Build what is feasible in the actual repo.**

### Phase A — discovery and decisions

1. Inspect existing repository; identify framework, run scripts, deployment, assets, design patterns and limitations.
2. Review content provided by founders. Create a concise verified/unverified facts register.
3. Choose a restrained design direction based on this specification, documenting any necessary deviations.
4. Create a route/content/component inventory and prioritize functional P0 pages.

### Phase B — design system and foundation

1. Establish tokens, typography, spacing, responsive containers, accessible buttons/forms, consistent header/footer.
2. Create original Anvesha wordmark treatment and simple motif (proposal assets if not founder-approved).
3. Implement metadata, sitemap, image optimization, content schemas and empty states.
4. Set up basic form delivery or provide explicit **not configured** behavior and a working email-based fallback; never fake submission success.

### Phase C — polished pages

1. Finish homepage to the full narrative spec with careful responsive art direction.
2. Build About, Our Work, Insights, Events, Get Involved, Partnerships, Contact and legal/accessibility routes.
3. Implement insight and event detail templates where real content exists; otherwise keep templates ready but do not create fake public content.
4. Wire all CTAs, internal links, accessible states and approved external resources.
5. Use actual founder content or transparent launch-stage language.

### Phase D — quality assurance

1. Run install, lint, typecheck, tests and production build; fix failures.
2. Use browser tooling where available to inspect homepage, one interior page, content detail, and forms at **320px, 390px, 768px, 1280px, 1440px**.
3. Test keyboard menu, focus, visible errors, empty states, reduced motion and any critical user action.
4. Run Lighthouse / accessibility scans if available, then manually review key problems.
5. Confirm no horizontal overflow, broken image, missing alt, empty link, dead button, fake content, console error, draft leak or public secret.
6. Test first-party forms end-to-end with a safe test recipient before claiming they work. If external service secrets are unavailable, be explicit about what must be connected for launch.

### Phase E — deployment / handoff

- Deliver runnable project, exact local commands, environment variable names, deployment instructions and short maintainer notes.
- Provide the verified/unverified founder content checklist and explicit legal/funding launch blockers.
- Explain what is implemented, what remains intentionally disabled, and any known accessibility/performance caveats.
- Do not call a build production-ready if forms, legal copy, registration claims, DNS, contact email or approval-dependent items are unverified.

### How to handle ambiguities

- **If necessary information is absent, choose the safest polished fallback** and keep progressing: e.g. `Based in Nepal`, `Contact us to collaborate`, `No announced events yet`.
- Prefer a discreet `TODO` in a content/config file or `LAUNCH_CHECKLIST.md` over publishing visible `[PLACEHOLDER]` text.
- Only ask the founder questions when a choice is genuinely blocking, legally sensitive, security-sensitive or prevents the site from performing its primary task. Collect other unanswered details in the handoff.
- Do not invent facts to fill a template. A well-designed empty state is better than false credibility.

---

## 15. Explicit acceptance criteria / definition of done

A reviewer should be able to answer **yes** to all applicable points:

### Brand and messaging

- [ ] Anvesha is explained clearly in the hero, and the name is consistent.
- [ ] Site communicates liberty, technology, society, policy and real-world action without sounding partisan or like a generic agency.
- [ ] The Nepal-rooted / internationally relevant positioning is visible and accurate.
- [ ] Design has one coherent, ownable identity, excellent typography and disciplined spacing.

### Product and content

- [ ] Every required P0 route works, with no dead CTA or broken navigation.
- [ ] A grantmaker can understand mission, focus, partnership models, credibility signals and how to inquire within 2–3 clicks.
- [ ] A student can find engagement options; a researcher can find insights; an event visitor can locate schedule/registration when available.
- [ ] Events, publications, people and partner/impact claims are real, accurately labeled or gracefully absent.
- [ ] No fictional activity history, affiliation, beneficiary count, grant award or endorsement is on the public site.
- [ ] Actual inquiry forms deliver and show truthful confirmation; otherwise the disabled state/fallback is clear.
- [ ] Relevant privacy, accessibility and institutional information exists and is not misleading.

### UX and engineering

- [ ] Site feels excellent on mobile and desktop, including 320px and 390px widths.
- [ ] Keyboard usability, focus, form errors, contrast and reduced-motion states were checked.
- [ ] Code is componentized, typed, maintainable and not overengineered.
- [ ] Metadata, sitemap, structured data where applicable and content indexing are implemented.
- [ ] Performance is measured honestly and major issues addressed.
- [ ] Production build succeeds, and there are no known public secrets or unhandled runtime errors.
- [ ] Maintainer can add an insight/event without modifying many unrelated components.

### Launch responsibility

- [ ] Unverified legal status and grants/fundraising capability are not presented as approved.
- [ ] Payments are not activated without explicit legal and operational approval.
- [ ] Team profiles, addresses, accounts, social links, partner logos and documents are only published with approval.
- [ ] Handoff contains a short `What’s live / What needs your approval / How to update` report.

---

## 16. Mandatory handoff format for the coding agent

At completion, give the founder a concise, actionable report in this exact order:

1. **What you built:** routes, key components, interactions and noteworthy visual decisions.
2. **How to run and deploy:** commands, environment variables and hosting steps.
3. **What must be supplied before launch:** legal name/status, approved wordmark, public contact email, institution/team bios (optional), genuine images, actual event/research content, privacy/legal approval, partnership/funding permissions, integration credentials.
4. **What you tested:** build, lint/types, responsive, accessibility and performance, with results and limitations.
5. **What you intentionally did not activate:** such as donations, fabricated impact metrics, unconfigured newsletter, unverified registrations.
6. **Next three improvements:** only after the core site is stable (for example Nepali translation, editorial CMS and downloadable grant due-diligence kit).

**The result should be a website that earns a serious conversation with a foundation program officer, a policymaker, a student and a technologist—without appearing overstated, bloated or unfinished.**

---

## 17. Founder inputs to collect, without blocking initial design/build

Use clear configurable fields or a launch checklist for these, and proceed with safe defaults:

- Official registered name and status; public brand is Anvesha, as confirmed by the founder.
- Verified domain and public email address.
- City / public office address (if appropriate).
- Names, positions, approved bios, and consented photographs of founders/board/staff/advisers to publish (if any).
- Organization's actual registrations, affiliations, policies and relevant approvals.
- Confirmed active programs, real past events, published research and upcoming dates.
- Approved brand assets and genuine licensed photos.
- Social media accounts, newsletter provider and form submission destination.
- Hosting/deployment and content editing preferences.
- Whether a legally reviewed partner-facing organization profile PDF is available.
- Approved grantmaking and payment language, if any.

**Proceed with the site even if most of these are missing. Use the launch-stage editorial language and omit unverified claims until approved.**
