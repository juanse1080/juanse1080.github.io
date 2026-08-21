# Performance and SEO Checklist

Use this checklist before shipping meaningful changes to the portfolio.

## Static output

- [ ] The production build succeeds.
- [ ] Public routes export as static HTML.
- [ ] Main content is present in the exported HTML, not only reconstructed by client JavaScript.
- [ ] No server runtime is required.

## Performance

- [ ] Lighthouse Performance is 95 or higher.
- [ ] Initial JavaScript remains minimal.
- [ ] Client components are only used where interactivity is necessary.
- [ ] Non-critical images use lazy loading.
- [ ] Images have explicit width and height.
- [ ] Large images are pre-optimized before being committed.
- [ ] Fonts are limited to the weights actually used.

## SEO

- [ ] Lighthouse SEO is 100.
- [ ] Each public page has a focused title and description.
- [ ] Canonical URLs are defined.
- [ ] English and Spanish alternatives are linked with hreflang.
- [ ] Open Graph metadata is present for share previews.
- [ ] Twitter card metadata is present where applicable.
- [ ] `robots.txt` allows indexing and points to the sitemap.
- [ ] `sitemap.xml` includes all public routes.
- [ ] JSON-LD is valid and consistent with visible content.

## Accessibility

- [ ] Lighthouse Accessibility is 95 or higher.
- [ ] Heading order is coherent.
- [ ] Interactive elements have accessible names.
- [ ] External links are safe and clear.
- [ ] Contrast remains readable.

## Content

- [ ] The page supports conversion to opportunity.
- [ ] Claims are backed by evidence, metrics, or concrete technical actions.
- [ ] English and Spanish copy remain aligned.
- [ ] Production experience is more prominent than public projects.
