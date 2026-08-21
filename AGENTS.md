# Agent Guide

This repository is Juan Marcon's static opportunity portfolio. Optimize for professional opportunity conversion, fast static delivery, clean SEO, and safe AI-assisted maintenance.

## Product intent

- Primary audience: technical leads and hiring managers.
- Secondary audience: recruiters.
- Primary positioning: Software Engineer specialized in web, cloud, and AI products, focused on performance, architecture, and value delivery.
- English is the primary locale for global opportunities; Spanish must remain high quality.
- The implementation should be technical but sober: no unnecessary complexity for showcase value alone.

## Hard constraints

- Keep the site statically generated and deployable as static assets.
- Do not add server runtime requirements.
- Do not replace the static architecture or migrate frameworks without explicit user approval and an accepted ADR.
- Astro may be proposed only if optimized Next static export cannot meet the performance budget.
- Avoid adding client-side JavaScript unless it directly improves conversion, accessibility, or essential UX.
- Do not recommend `next/image` as the primary performance strategy; images should be pre-optimized static assets.

## Performance budget

Before completing meaningful changes, verify or preserve:

- Lighthouse Performance: 95+
- Lighthouse SEO: 100
- Lighthouse Accessibility: 95+
- HTML content is indexable on every public route
- Initial JavaScript remains minimal
- Non-critical images are lazy loaded
- Critical images have explicit dimensions and appropriate priority
- Internal links work
- Metadata is complete: title, description, canonical, hreflang, Open Graph, and Twitter card where applicable

## Content rules

- Write for technical evaluators first, recruiters second.
- Prefer evidence over adjectives.
- Experience entries should read like micro case studies: problem, technical action, result.
- Project entries are secondary evidence and should not overshadow production experience.
- Keep English and Spanish content coherent; do not update one locale and leave the other stale.

## Documentation rules

- Keep `CONTEXT.md` as the domain glossary only; do not turn it into a task list or spec.
- Record durable, surprising trade-off decisions in `docs/adr/`.
- Keep documentation compact and useful for future agents.

## Source control hygiene

- Treat source files and documentation as the source of truth.
- Do not rely on committed `.next/` or `dist/` output for understanding current behavior.
- Keep generated artifact cleanup separate from functional changes when possible.

## Known UX constraint

The experience timeline includes a duration bar where bar length represents time in each role. Preserve this visual concept unless the user explicitly approves removing it. Prefer explicit date data and static/build-time calculations over client runtime calculations.

## Editorial rules

- Rewrite copy for conversion, not decoration.
- The hero, about section, and experience section carry the main conversion burden.
- Use a human + technical tone: approachable, precise, and not corporate-generic.
- Every claim must be clear, technically precise, defendable in interview, opportunity-oriented, and coherent across English and Spanish.
- Use approximate metrics only when they are defendable in interview; otherwise prefer qualitative impact.
- Mention companies and general outcomes, but avoid internal product names, sensitive implementation details, or NDA-protected context.
- Present AI as a strong capability within web/cloud/AI work, not as the only identity.
- Keep availability visible but subtle.
- Reduce education/courses prominence; production experience and impact evidence come first.
- Curate public projects as secondary technical evidence with problem, solution, stack, and result or learning.

## Conversion and presentation rules

- Keep LinkedIn and email equally visible as contact channels.
- Do not add a custom contact form unless explicitly requested.
- Provide direct resume PDF access and download; do not embed the PDF viewer by default.
- Company logos need context; logos alone are not evidence.
- Present skills as capabilities first, technologies second.
- Keep full experience history, but make the most relevant roles more prominent and detailed.
- Keep public projects only when they provide visible evidence, strong learning, a usable demo/repo, or a clear trust-building reason.
- Prioritize brand + role SEO keywords.
- Do not add analytics in the initial optimization batch.
- Use CSS-only animation by default; add JavaScript animation only when it improves conversion or accessibility.

## Agent skills

### Issue tracker

Issues and specs for this repo live in GitHub Issues for `juanse1080/juanse1080.github.io`. See `docs/agents/issue-tracker.md`.

### Triage labels

This repo uses the default five-label triage vocabulary: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, and `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

This is a single-context repo using root `CONTEXT.md` and root `docs/adr/`. See `docs/agents/domain.md`.
