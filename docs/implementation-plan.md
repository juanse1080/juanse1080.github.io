# Implementation Plan

This plan translates the portfolio decisions into compact work batches for future agents.

## Batch 1 — Static correctness and SEO foundation

- Fix the current production build/type-check failure.
- Ensure exported pages contain indexable static HTML.
- Add or verify metadata for public pages: title, description, canonical, hreflang, Open Graph, and Twitter card.
- Add or clean `robots.txt` and `sitemap.xml`.
- Serve English at the root route when practical.
- Fix obvious mixed-language labels and typos only; leave broader copywriting for a dedicated batch.

## Batch 2 — Reduce client-side JavaScript

- Replace the interactive language switch with static locale links.
- Remove custom hash scrolling unless a real browser-anchor bug is proven.
- Keep the experience duration bar, but make the date model explicit and static-output friendly.
- Move calculations out of client components where practical.

## Batch 3 — Generated artifact cleanup

- Stop treating `.next/` as source-controlled output.
- Stop treating `dist/` as source-controlled output if GitHub Actions uploads it as the Pages artifact.
- Verify `.gitignore` covers generated build output.
- Keep the cleanup separate from functional changes to avoid noisy diffs.

## Batch 4 — Conversion copy and content evidence

- Rewrite the hero around the Professional Promise.
- Rework experience entries into micro case studies: problem, technical action, result.
- Keep production experience more prominent than public projects.
- Align English and Spanish copy.
- Make AI a strong capability, not the only positioning axis.

## Batch 5 — Measurement and migration decision

- Run Lighthouse after the static/SEO/performance batches.
- If optimized Next static export misses the Performance Budget, create a task to evaluate migration to Astro.
- Do not migrate frameworks without explicit user approval and an accepted ADR.

## Editorial direction for Batch 4

- Rewrite hero, about, and experience first; do not rewrite the whole site in one pass.
- Use a human + technical tone.
- Hero should communicate: Software Engineer building web, cloud, and AI products with a focus on architecture, performance, and product impact.
- Experience entries should be defensible micro case studies.
- Use metrics only if Juan can explain them honestly in an interview.
- Keep confidential work abstract: companies and general outcomes are okay; internal product details are not.
- Mention AI in hero and experience, without creating a standalone AI section for now.
- Reduce and move education lower in the hierarchy.
- Rewrite public projects as curated mini cases.
- Add a subtle availability signal.

## Additional content decisions

- Keep LinkedIn and email equally visible; do not add a contact form.
- Resume access should be direct PDF link/download, not an embedded viewer.
- Keep company logos, but add context so they support credibility.
- Convert skills from a flat chip list into capabilities with supporting technologies.
- Keep all experience, but prioritize the most relevant roles with more detail.
- Keep only projects that provide evidence, learning, demo/repo, or clear trust-building value.
- Prioritize brand + role SEO keywords.
- Do not add analytics in Batch 1; consider Plausible or Umami later if measurement becomes necessary.
- Prefer CSS-only animation; JavaScript animation requires conversion or accessibility value.

## Implementation status

Design decisions are documented, but implementation has not started. Batch 1 should begin only after explicit user approval.
