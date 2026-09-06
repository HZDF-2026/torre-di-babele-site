# torre-di-babele-site

Official website of Torre di Babele (登高) — EN/FR/ES static site on Cloudflare Pages.

- `/` — English
- `/fr/` — Français
- `/es/` — Español

Deployments run automatically from `main` via Cloudflare Pages.

## Pricing (geo-aware)

Plans are authored in USD ($0 / $30 / $50). A Pages Function (`functions/_middleware.js`)
rewrites the plan cards to CNY (¥0 / ¥30 / ¥50) when the visitor's IP country is CN.
Append `?cc=CN` or `?cc=US` to any page URL to preview either currency.

