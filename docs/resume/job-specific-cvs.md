# Job-Specific CVs

Status: Active convention
Related: [`canva-export-log.md`](./canva-export-log.md), [`cv-source-drafts.md`](./cv-source-drafts.md)

## What this is

Besides the two general-purpose resumes wired into the site (`src/const/profile.ts`), this repo also hosts **job-specific CVs**: variants tailored to a particular role, stack, or application, published as static assets under `public/resume/` so they have a stable public URL to share directly (email, LinkedIn DM, application form).

These are **not** linked from the site UI and are **not** referenced in `src/const/profile.ts`. They exist purely as hosted files for one-off outbound use.

## Naming convention

`Juan-Marcon-CV-<LOCALE>-<Focus>.pdf`, e.g. `Juan-Marcon-CV-ES-Frontend.pdf`.

## Current job-specific CVs

| File | Focus | Added | Notes |
| --- | --- | --- | --- |
| `public/resume/Juan-Marcon-CV-ES-Frontend.pdf` | Frontend Ssr / EdTech applications (Spanish) | 2026-09-02 (PR #59) | Provided by Juan directly (not generated from `cv-source-drafts.md`); do not overwrite with the general CV content. |

## Agent guidance

- When Juan provides a new job-specific CV PDF, publish it under `public/resume/` following the naming convention above, commit, and open a PR — no code changes needed unless Juan asks to surface it elsewhere.
- Add a row to the table above documenting focus, date, and PR.
- Do not add these to `src/const/profile.ts`, LinkedIn Featured, or the general resume download links — they are for targeted outbound sharing only, decided per-application by Juan.
- Do not treat these as replacing the general resumes; the general ones (`Juan-Marcon-Resume.pdf`, `Juan-Marcon-CV-ES.pdf`) remain the site's canonical downloads.
