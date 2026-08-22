# Generated artifacts

This repository treats source files and documentation as the source of truth for the Static Portfolio. Generated build output is not reviewed or maintained by hand.

## What is generated

- `.next/` contains Next.js build internals.
- `dist/` contains the exported static site uploaded by GitHub Pages.
- `build/`, `out/`, `coverage/`, `tsconfig.tsbuildinfo`, and `next-env.d.ts` are local tool outputs or generated workspace files when present.
- The root `index.html` file is generated into `dist/index.html` by `scripts/sync-root-primary-locale.ts` after `next build`; there should not be a tracked root-level `index.html` source file.

## How deployment still works

The GitHub Pages workflow builds from source on every deployment:

1. Install dependencies from `yarn.lock`.
2. Run `npx next build`, which exports the static site to `dist/` because `next.config.js` sets `output: "export"` and `distDir: "dist"`.
3. Run `yarn postbuild`, which copies the primary locale home page to `dist/index.html`.
4. Upload `./dist` as the Pages artifact.

Future agents should inspect `src/`, `public/`, `scripts/`, docs, and config when reasoning about site behavior. If local generated output exists, rebuild it instead of treating it as evidence of current behavior.
