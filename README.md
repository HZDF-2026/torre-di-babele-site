# torre-di-babele-site

Official website of Torre di Babele (登高) — EN/FR/ES static site on Cloudflare Pages.

- `/` — English
- `/fr/` — Français
- `/es/` — Español

Deployments run automatically from `main` via Cloudflare Pages.

## Legal pages (required before paid launch)

Four legal documents, in all three site languages, linked from every footer:

- `/terms.html` · `/fr/terms.html` · `/es/terms.html` — Terms of Service
- `/privacy.html` · `/fr/privacy.html` · `/es/privacy.html` — Privacy Policy (GDPR + PIPL)
- `/refund.html` · `/fr/refund.html` · `/es/refund.html` — Refund Policy (14-day full refund)
- `/cookies.html` · `/fr/cookies.html` · `/es/cookies.html` — Cookie Policy (no tracking cookies)

Operator of record: Kunming Unintellix Artificial Intelligence Technology Co., Ltd.
Contact: limpt.party@gmail.com. The MoR/PSP review (Paddle, Payoneer, Alipay/WeChat
merchant onboarding) reads these pages — keep the "last updated" date accurate when
they change.

## Pricing (geo-aware)

Plans are authored in USD ($0 / $30 / $50). A Pages Function (`functions/_middleware.js`)
rewrites the plan cards to CNY (¥0 / ¥30 / ¥50) when the visitor's IP country is CN.
Append `?cc=CN` or `?cc=US` to any page URL to preview either currency.

