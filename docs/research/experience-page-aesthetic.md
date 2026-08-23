# Experience page aesthetic research: micro case studies and skill tags

_Date: 2026-08-22_

## Research question

How should `/experience` present role-level micro case studies without making the page feel like a wall of cards, and how should technology/skill tags be spaced and densified for a sober professional portfolio?

Context for this repo:

- Static portfolio for Juan Marcon.
- Primary audience: technical leads and hiring managers; secondary audience: recruiters.
- The page already treats each role as a micro case study with `summary`, `problem`, `action`, and `result` copy.
- Current implementation uses one outer rounded article per role and three inner bordered panels for problem/action/result, plus many pill-style skill chips.
- The desired tone is technical, sober, evidence-led, and minimal-JS.

## Sources reviewed

Primary/first-party sources were preferred. NN/g is included for scanning and card-pattern evidence.

- [Material Design 3: Cards](https://m3.material.io/components/cards) — cards are for content and actions about a single subject; types include elevated, filled, and outlined.
- [Material Design 3: Chips](https://m3.material.io/components/chips) — chips support compact information entry, selection, filtering, or actions.
- [Material Design 3: Grids & spacing](https://m3.material.io/foundations/layout/grids-spacing/spacing) — spacing organizes content/actions; denser layouts feel more serious/focused, while more spacious layouts feel more approachable.
- [Apple HIG: Writing](https://developer.apple.com/design/human-interface-guidelines/writing) — screen text is part of UX; order important information first and format text for easy reading.
- [Apple HIG: Typography](https://developer.apple.com/design/human-interface-guidelines/typography) — typography supports legibility, information hierarchy, important content, and brand/style expression.
- [GOV.UK Design System: Spacing](https://design-system.service.gov.uk/styles/spacing/) — uses a responsive spacing scale; small units stay stable and larger units adapt by screen size.
- [GOV.UK Design System: Tag](https://design-system.service.gov.uk/components/tag/) — tags should communicate status, should not masquerade as links/buttons, and the number of statuses should be kept small enough to remain useful.
- [GOV.UK content guidance: Understand content design](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/plan-manage-content/understand-content-design/) — good content helps users quickly find what they need; reduce, split, change format, or remove content when needed.
- [GOV.UK Service Manual: Writing for user interfaces](https://www.gov.uk/service-manual/design/writing-for-user-interfaces) — UI copy should be short/direct, use one idea per sentence, put important words first, and drop unnecessary words.
- [GOV.UK Design System: Paragraphs](https://design-system.service.gov.uk/styles/paragraphs/) — body copy should be comfortably readable; small body text should be used sparingly.
- [IBM Carbon: Tile usage](https://carbondesignsystem.com/components/tile/usage/) — tiles/cards group related information; base tiles sit on the same plane as the page and should not use drop shadows as fake hierarchy.
- [IBM Carbon: Tag usage](https://carbondesignsystem.com/components/tag/usage/) — read-only tags categorize; use color/icon differentiation intentionally; keep short tag titles; wrapping is acceptable for a few lines, but more than five wrapped lines suggests a different component.
- [IBM Carbon: Content overview](https://carbondesignsystem.com/guidelines/content/overview/) — strong content is simple, logical, persuasive not poetic, confident not boastful, and elevates facts/outcomes.
- [Nielsen Norman Group: Cards UI component definition](https://www.nngroup.com/articles/cards-component/) — cards group a few short related pieces of information and usually work as snapshot entry points to detail.
- [Nielsen Norman Group: Text scanning patterns](https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/) — users scan web text in patterns such as F-pattern, spotted, layer-cake, and commitment; clear headings/subheadings improve scanning.
- [Nielsen Norman Group: Layer-cake scanning](https://www.nngroup.com/articles/layer-cake-pattern-scanning/) — visually distinct, descriptive headings/subheadings help users quickly find relevant information.
- [Nielsen Norman Group: Zigzag image-text layouts](https://www.nngroup.com/articles/zigzag-page-layout/) — alternating/zigzag layouts can reduce scanning efficiency compared with predictable alignment.

## Findings

### 1. Treat each job as the card; do not cardify every micro case-study field

Material and NN/g both frame cards as containers for a single subject or conceptual unit. For this page, the conceptual unit is the role at a company, not each `problem`, `action`, and `result` line.

Carbon's tile guidance also supports a flatter approach: when content belongs on the same page plane, avoid using shadows or nested elevated surfaces just to create hierarchy. The current page risks visual over-cardification because each role is already a large rounded article, and then each case-study field becomes another mini card.

**Implication:** keep one role-level container, but make the case-study fields feel like structured content inside it. Use definition-list hierarchy, separators, subdued row backgrounds, or left-rule accents instead of three equally prominent nested cards.

### 2. Micro case studies need scanning hierarchy more than decoration

NN/g's scanning research says users do not read every word first; they scan for signals. Its layer-cake pattern specifically supports descriptive headings/subheadings as a fast way to locate relevant content. Apple HIG similarly emphasizes typographic hierarchy and putting important information first.

For a technical evaluator, the fast scan should answer:

1. What role/company/timeframe is this?
2. Why is this role relevant to web/cloud/AI engineering?
3. What problem did Juan handle?
4. What technical action did he take?
5. What outcome or evidence resulted?
6. Which technologies support the claim?

**Implication:** the micro case-study labels should behave like wayfinding, not decorative badges. `Problem`, `Action`, and `Result` should remain visible, consistent, and left-aligned. The strongest evidence should appear early in the summary or result, not buried in the third panel.

### 3. Use progressive emphasis across featured/supporting/archive roles

A long career page can feel like too many cards if every item has the same visual weight. Material spacing guidance notes that density changes personality; denser presentation can feel more serious and focused. GOV.UK's content guidance also supports reducing, splitting, or changing format based on user need.

NN/g's zigzag-layout findings are also relevant: avoid decorative alternation between entries. A predictable vertical rhythm is more appropriate than alternating card positions, masonry layouts, or image/text zigzags.

**Implication:** preserve complete history, but do not give complete history equal display weight.

- Featured roles: full micro case-study treatment.
- Supporting roles: shorter case study with reduced surface treatment and fewer visible tags.
- Archive roles: compact timeline/list treatment with summary and selective tags only.

This matches the repo's existing `priority: "featured" | "supporting" | "archive"` data model and avoids introducing JS disclosure controls.

### 4. Skill tags should be evidence metadata, not visual confetti

Material chips support compact selections/actions, but this page's skills are read-only metadata. GOV.UK warns that tags should not look interactive when they are not. Carbon explicitly supports read-only tags for categorization and recommends concise titles, with long tag titles only when necessary.

The current skill lists include many repeated and long labels such as `Amazon Web Services (AWS)`, `Azure Cloud Services`, and `Azure DevOps Server`. These are useful for SEO and technical evidence, but when all are presented as full pills with generous padding, they compete with case-study content.

**Implication:** skill tags should be visually quieter than case-study text. They should support the evaluator's confidence after the role narrative, not become the dominant texture of the page.

### 5. Tag density should have an explicit ceiling

Carbon's tag guidance allows wrapping to a few lines but says more than five wrapped lines suggests a different component. For this portfolio, five lines is too much because tags are supporting evidence, not the main task.

**Recommended ceiling for this repo:**

- Featured roles: show 8-10 priority tags by default.
- Supporting roles: show 5-7 priority tags.
- Archive roles: show 3-5 tags.
- Keep total visible tag wrap to about 2 lines on desktop and 3 lines on mobile.
- Prefer a plain text overflow signal such as `+4 more: Redis, Queues, Storage, Gemini` if all skills must remain indexable in static HTML.

No client-side filtering or expansion is needed for the initial aesthetic pass.

## Recommendations tailored to `/experience`

### A. Layout

1. Keep the role as the only strong card-like surface.
2. Replace the three inner case-study mini cards with one of these lower-noise patterns:
   - a single definition-list block with `Problem`, `Action`, `Result` rows separated by subtle dividers;
   - a vertical step list with small labels and a shared left border;
   - a two-column desktop layout where summary/date/tags stay left and case-study rows stay right.
3. Use stronger surface treatment only for `featured` roles. Let `supporting` and `archive` roles flatten progressively.
4. Keep headings and labels aligned to improve layer-cake scanning.
5. Preserve static HTML content; avoid JS accordions unless later usability testing shows the page is too long.

### B. Micro case-study copy

1. Keep `problem/action/result` as stable labels; they are useful scanning anchors.
2. Limit each field to one concise sentence or two short clauses.
3. Put the strongest role-specific evidence in `summary` or `result`.
4. Avoid turning each micro case study into a full case-study card. If a role needs more detail, link to a dedicated case study later rather than expanding all roles equally.
5. Keep wording aligned with IBM Carbon's content posture: fact/outcome-led, confident, not boastful.

### C. Skill/tag treatment

1. Treat skills as read-only metadata, not buttons: no hover styles implying click unless they link/filter.
2. Reduce tag padding and line-height compared with current large pills; aim for compact badges.
3. Keep tag text concise:
   - `AWS` instead of `Amazon Web Services (AWS)` when the abbreviation is obvious to technical evaluators.
   - `Azure` or `Azure Cloud` instead of `Azure Cloud Services` when space is tight.
   - `Postgres` or `PostgreSQL` consistently, but not both.
4. Prioritize tags by evidence value per role: architecture/cloud/backend/frontend/AI first, commodity tools later.
5. Keep visual contrast sufficient, but lower chroma and border emphasis so tags do not overpower the narrative.
6. Avoid decorative icons inside tags; Carbon notes icons in compact tags can create visual tension.

### D. Spacing and density

1. Use responsive spacing: larger role gaps on desktop, tighter but readable gaps on mobile.
2. Maintain enough vertical space between roles so each job remains a distinct career chapter.
3. Reduce spacing inside tag groups relative to spacing between case-study rows.
4. Use a consistent spacing scale instead of ad hoc margins. The repo already uses Tailwind utilities, so prefer a small set such as:
   - role container padding: `p-5 md:p-7/8` depending on priority;
   - case-study row gap: `gap-4` or row separators;
   - tag gap: `gap-1.5` or `gap-2`, not `gap-3` for dense skill sets;
   - tag padding: closer to `px-2 py-1` than `px-3 py-2` for read-only skills.
5. Keep body copy at readable sizes. Avoid shrinking micro case-study text below `text-base` just to fit more content.

## Suggested aesthetic direction

The best direction is **structured editorial timeline, not card grid**.

The page should feel like a curated engineering record: each role is a chapter, the micro case study is a compact evidence block, and skills are metadata. The visual hierarchy should be:

1. Company / role / timeframe.
2. One-sentence relevance summary.
3. Problem → Action → Result evidence.
4. Selected technologies.

This keeps the page sober, static, accessible, and useful for technical evaluators while avoiding the “too many cards” feeling.

## Non-goals for the next implementation pass

- Do not add client-side filtering just to manage tags.
- Do not convert the page into a masonry/card grid.
- Do not hide core experience content behind JS-only accordions.
- Do not make every skill tag clickable unless there is a real destination or filtering behavior.
- Do not replace detailed experience with logos or decorative visuals.
