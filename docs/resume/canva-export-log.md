# Canva Resume Export Log

Issue: #41
Status: PDFs exported, validated, and ready for repository use
Date: 2026-08-22
Source draft: [`docs/resume/cv-source-drafts.md`](./cv-source-drafts.md)

## Export targets

| Version | Target path | Status |
| --- | --- | --- |
| English resume | `public/resume/Juan-Marcon-Resume.pdf` | Exported and validated |
| Spanish CV | `public/resume/Juan-Marcon-CV-ES.pdf` | Exported and validated |

## Canva designs

| Version | Original design | Approved copy | Notes |
| --- | --- | --- | --- |
| English resume | `DAF77SEK_44` — https://www.canva.com/design/DAF77SEK_44/SflAw1vzWpgjQGcqfdqTwQ/edit | `DAHTB34AoU4` — https://www.canva.com/d/NRAIAdHLt_HzHgv | Copied before editing; final copy title: `Juan Marcon Resume EN — 2026 Approved Export`; reduced to 2 pages; approved by Juan in Codex chat. |
| Spanish CV | `DAGDzu21sDM` — https://www.canva.com/design/DAGDzu21sDM/ACBuva1Cp-FhddZ_3nCPhA/edit | `DAHTB5zfs-s` — https://www.canva.com/d/F9FAInaJFYsjEfk | Copied before editing; final copy title: `Juan Marcon CV ES — 2026 Approved Export`; reduced to 2 pages; approved by Juan in Codex chat. |

## Content and design decisions applied

- Used `docs/resume/cv-source-drafts.md` as semantic authority.
- Preserved the original Canva visual identity while improving density and scanability.
- Kept both versions to 2 pages.
- Compact title used in both copies: `Senior Software Engineer | Web, Cloud & AI`.
- Trimmed redundant technology detail and compacted earlier experience before reducing prioritized experience.
- Did not name Tridas or any dedicated client.
- Kept English as the global version and Spanish as the LATAM adaptation.

## Export QA checklist

Completed after the PDFs were exported into the target paths:

- [x] Rendered both PDFs visually and confirmed there is no clipped text, unreadable density, or wrong page order.
- [x] Extracted text from both PDFs. Text is selectable/extractable: English 4,097 characters; Spanish 4,083 characters.
- [x] Searched extracted text for prohibited names or dedicated-client references; none found.
- [x] Confirmed final files exist at `public/resume/Juan-Marcon-Resume.pdf` and `public/resume/Juan-Marcon-CV-ES.pdf`.
- [x] Updated the direct website resume links from older `/docs/CV/JuanMarcon*.pdf` paths to the new `/resume/` static asset paths.

## Connector notes

The Canva connector supported copying, editing, previewing, and saving the designs, but no PDF export/download tool was available in the exposed connector tools during implementation. Per the #41 grill decision, Juan exported the approved Canva copies manually; the resulting PDFs were then validated and added to the repository.

## Validation details

- `pdfinfo` confirmed both files are unencrypted, tagged, 2-page A4 PDFs with no JavaScript or forms.
- Visual render inspection used Poppler-rendered PNGs under `tmp/pdf-render/`.
- Old-path replacement updated `src/app/[locale]/_components/sections/About.tsx`.
