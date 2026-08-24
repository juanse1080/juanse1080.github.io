# Final Performance Budget Audit

Date: 2026-08-24

Issue: #35 (parent: #25)

## Executive summary

- **Result: the Performance Budget is met.** No Astro migration issue is needed.
- Lighthouse Performance is 95-100 across all six public routes (both locales).
- Lighthouse SEO is 100 and Accessibility is 100 across all six public routes, after two small fixes made during this audit.
- Public routes, metadata, sitemap, robots.txt, locale alternates, and internal links were verified against the static `dist/` export and all check out.
- Initial JavaScript stays framework-baseline (~96 kB First Load JS reported by `next build`); no analytics scripts are present anywhere in the exported output.

## Method

1. `yarn build` (Next.js static export via `output: 'export'`) to produce `dist/`.
2. Served `dist/` with `npx serve` (gzip-compressing static server), not Node's bare `http.server`, so transfer sizes reflect what GitHub Pages actually serves. An initial run against an uncompressed server understated Performance (77) purely from missing compression — that number was discarded as a measurement artifact, not a real regression.
3. Ran `npx lighthouse` (mobile, simulated throttling, default config) against all six public routes: `/en/`, `/es/`, `/en/experience/`, `/es/experience/`, `/en/projects/`, `/es/projects/`.
4. Cross-checked all existing `yarn verify:*` scripts and `tsc --noEmit` before and after any fix.

## Lighthouse results (final)

| Route | Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- | --- |
| /en/ | 95 | 100 | 100 | 100 |
| /es/ | 95 | 100 | 100 | 100 |
| /en/experience/ | 100 | 100 | 100 | 100 |
| /es/experience/ | 100 | 100 | 100 | 100 |
| /en/projects/ | 99 | 100 | 100 | 100 |
| /es/projects/ | 99 | 100 | 100 | 100 |

Budget: Performance ≥ 95, SEO = 100, Accessibility ≥ 95. All six routes meet or exceed every threshold.

The home route sits at the 95 floor; its LCP element is the hero heading, and the simulated-throttling run puts LCP around ~2.9s. There is headroom above the floor but not a wide margin — worth a glance if future hero content grows heavier, but no action needed now.

## Fixes applied during this audit

Two real issues surfaced while auditing accessibility. Both were already non-blocking — Accessibility was 98 (home) and 95 (experience) *before* either fix, already at or above the 95 budget floor — so fixing them was not required to close this issue. They were fixed anyway, in place of only documenting a gap, because each was a single-cause, single-file (or near-single-file), style/markup-only change with no behavioral or content risk, fully covered by a full rebuild + the existing `yarn verify:*` suite + a Lighthouse re-run before it was considered done:

1. **Missing `<main>` landmark** (`landmark-one-main`, Lighthouse/axe rule, all routes). The three route trees rendered `<AppBar /> + sections` directly under `<body>` with no landmark. Changed `AppBar`'s wrapper `<div>` to `<header>` and wrapped each page's content sections in `<main>` in [src/app/[locale]/page.tsx](../../src/app/%5Blocale%5D/page.tsx), [src/app/[locale]/experience/page.tsx](../../src/app/%5Blocale%5D/experience/page.tsx), and [src/app/[locale]/projects/page.tsx](../../src/app/%5Blocale%5D/projects/page.tsx).
2. **Insufficient color contrast** (`color-contrast`, experience routes only). Lighthouse reported: *"Element has insufficient color contrast of 4.46 (foreground color: #818181, background color: #1a1a1a, font size: 9.0pt/10.5pt). Expected contrast ratio of 4.5:1"*, on 15 elements. Root cause: archived-priority experience entries wrap their summary/case-study block in `opacity-90`, which compounds with the `text-white/45`/`text-white/50` label classes to an effective alpha of ~0.40-0.45, landing at 4.46:1 — just under the 4.5:1 minimum. Bumped the three affected labels in [src/app/[locale]/experience/_components/ExperienceItem.tsx](../../src/app/%5Blocale%5D/experience/_components/ExperienceItem.tsx) to `text-white/60` (effective alpha ~0.54 under the archive multiplier). The post-fix Lighthouse run (table above) confirms `color-contrast` no longer flags any element on either experience route (Accessibility 100).

This is a narrower, more conservative bar than the `label-content-name-mismatch` gap below, which is deliberately left as report-only: it touches ~9 call sites of a shared i18n key across multiple components, is a genuine content/i18n change, and isn't needed to meet the budget either — so it's documented rather than fixed inline.

Both fixes were re-verified with a fresh build, the full `yarn verify:*` suite, `tsc --noEmit`, and a re-run of Lighthouse on all six routes (table above reflects the post-fix state).

## Known, documented gap (not fixed here)

- **`label-content-name-mismatch`** (axe/Lighthouse a11y rule): several "Go to X" links (experience items, project cards, section jump links) set `aria-label="Go to <label>"` while their visible content is richer (e.g. company + role + dates). WCAG 2.5.3 wants the accessible name to contain the visible text. This pattern is reused across ~9 call sites sharing the `common.goTo` i18n key (`Experience.tsx`, `ExperienceItemMobile.tsx`, `ExperienceItemDesktop.tsx`, `Project.tsx`, `Capability.tsx`, `Education.tsx`, `About.tsx`).
  - Not fixed in this audit: Accessibility is already 100 on the affected routes as scored by Lighthouse's category weighting, and reworking the shared `aria-label` pattern across every call site is broader content/i18n surgery than this audit issue's scope (measure-and-report, not a general optimization pass).
  - Recommendation for a future pass: either drop the redundant `aria-label` and let the link's visible content stand as its accessible name, or extend the `goTo` label to restate the full visible text.

## Routes, metadata, sitemap, robots, locale links

- **Public routes exported**: `/`, `/en/`, `/es/`, `/en/experience/`, `/es/experience/`, `/en/projects/`, `/es/projects/`, `/sitemap.xml`, `/robots.txt` — all return `200` from the static export.
- **Root locale**: `/` serves the synced English artifact (`scripts/sync-root-primary-locale.ts` output) with `<link rel="canonical" href=".../en/">` and full hreflang alternates (`en`, `es`, `x-default`), consistent with ADR 0003 (English as Primary Locale at root).
- **`robots.txt`**: `Allow: /` for all agents, points to `https://juanse1080.github.io/sitemap.xml`.
- **`sitemap.xml`**: lists all six locale route pairs with correct `xhtml:link` hreflang alternates; the two home entries additionally carry `x-default`.
- **Internal anchor links**: every `/en/experience#<company-slug>` link used from the home page resolves to a matching `id` in `dist/en/experience/index.html` (verified for all 11 experience entries); every `projects/#<slug>` link from the home page resolves to a matching `id` in `dist/en/projects/index.html` (all 3 featured projects); the home page's own `#experience`/`#projects` native anchors resolve within `dist/en/index.html`.
- **Nav and locale-switch links**: `AppBar` on every route links to `/en`/`/es` (home) and `/es`/`/en` (language switch as plain `<a>` links, per the Static Language Switch decision) — both resolve. `AppBar`'s external LinkedIn/GitHub links are unaffected by this audit.
- **Resume links**: `/resume/Juan-Marcon-Resume.pdf` and `/resume/Juan-Marcon-CV-ES.pdf` both exist in `dist/resume/` and return `200`.
- **Per-page metadata**: `<title>` and `<meta name="description">` are present and route-specific on all six routes, e.g. EN home: `Juan Marcon | Senior Software Engineer for Web, Cloud & AI Products`; EN experience: `Juan Marcon | Software Engineering Experience`; EN projects: `Juan Marcon | Software Projects`; Spanish equivalents confirmed distinct and translated (not copy-pasted English).

## JavaScript budget and analytics

- `next build` reports First Load JS of ~96 kB (shared 87.2 kB + per-route ~137 B) across all three route groups — framework-baseline, no route-specific JS bloat.
- No analytics scripts (`gtag`, Google Analytics, Plausible, Umami, or otherwise) appear anywhere in the exported `dist/en/` or `dist/es/` HTML, consistent with the "no analytics in the initial optimization" decision in #25.

## Astro migration trigger

Per ADR 0001 and issue #25/#35, an Astro migration issue is only created if optimized Next static export cannot meet the Performance Budget. It met the budget on every public route without needing further optimization beyond the two accessibility fixes above, so **no Astro migration issue was created.**
