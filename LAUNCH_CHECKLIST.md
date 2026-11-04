# Before public launch

The local site works without external services. Public launch remains dependent on the following items.

- [ ] Founder confirms working brand and approves the proposed wordmark/motif.
- [ ] Verify legal name/status before publishing any legal identity or registration claim.
- [ ] Supply a working public email, configure `PUBLIC_CONTACT_EMAIL`, and test the email link with the intended inbox owner.
- [ ] Select hosting, verify domain ownership and HTTPS, and set `SITE_URL`.
- [ ] Confirm host logging, processor locations and retention; revise privacy copy and obtain legal review.
- [ ] Confirm a usable privacy and accessibility reporting channel.
- [ ] Review all draft positioning and proposed activities against actual organisational plans.
- [ ] Review partnership/funding wording with leadership and qualified Nepal counsel. No assertion of grant eligibility, fundraising authority or tax treatment is currently made.
- [ ] Publish people, affiliations, institutional policies and documents only with verification and disclosure approval.
- [ ] If supplied, add genuine publications/events and review their sources, dates, permissions and accessibility. These are not prerequisites to an honest empty-state launch.
- [ ] Verify GitHub Pages HTTPS and provider response headers (custom headers in `deploy/headers.example` are for other hosts); test a real 404 response, redirects and canonical URLs.
- [ ] Re-run build, checks and deployed mobile/accessibility smoke tests; preserve rollback access.
- [ ] Only then set `PUBLIC_INDEXABLE=true`, rebuild, inspect robots/sitemap and submit the sitemap if desired.

## Intentionally inactive

Donations/payments; newsletter; analytics; online inquiry forms; social integrations; registration and affiliation claims; fabricated research, events, impact and partner logos.

## Later integrations

A form needs an approved provider and recipient, a secure runtime endpoint, anti-spam/rate limits, safe errors, actual delivery testing, documented data retention and an updated privacy notice. Newsletter signup needs an approved list and consent process. Funding collection needs founder/legal/operational approval and verified receiving arrangements.
