# Experience item containers research

_Date: 2026-08-22_

## Research question

Should each `/experience` item need its own card/container when the page already separates items with section dividers? Compare role-level cards against editorial list/timeline rows for a professional portfolio where each role acts as a micro case study.

Repo context:

- Static portfolio for Juan Marcon.
- Primary audience: technical leads and hiring managers; secondary audience: recruiters.
- `/experience` already renders each company as its own `Section`, and the shared `Section` component adds a divider after each section.
- Each role has micro case-study content: summary, problem, action, result, skills, dates, and priority.
- Desired tone: technical, sober, evidence-led, globally readable, minimal JavaScript.

## Sources reviewed

Primary / first-party design-system sources:

- [Material Design 3: Cards](https://m3.material.io/components/cards/guidelines)
- [Material Design 3: Lists](https://m3.material.io/components/lists/overview)
- [Material Design 3: Divider](https://m3.material.io/components/divider/guidelines)
- [Material Design 3: Grids and spacing](https://m3.material.io/foundations/layout/grids-spacing/spacing)
- [IBM Carbon: Tile](https://carbondesignsystem.com/components/tile/usage/)
- [IBM Carbon: Structured list](https://carbondesignsystem.com/components/structured-list/usage/)
- [IBM Carbon: Tag](https://carbondesignsystem.com/components/tag/usage/)
- [GOV.UK Design System: Summary list](https://design-system.service.gov.uk/components/summary-list/)
- [GOV.UK Design System: Details](https://design-system.service.gov.uk/components/details/)
- [GOV.UK Design System: Spacing](https://design-system.service.gov.uk/styles/spacing/)
- [Apple HIG: Lists and tables](https://developer.apple.com/design/human-interface-guidelines/lists-and-tables)
- [Apple HIG: Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

Supporting research source:

- [Nielsen Norman Group: Cards UI component definition](https://www.nngroup.com/articles/cards-component/)
- [Nielsen Norman Group: Text scanning patterns](https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/)
- [Nielsen Norman Group: How People Read Online](https://www.nngroup.com/articles/how-people-read-online/)
- [Nielsen Norman Group: F-shaped pattern of reading](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/)

## Findings

### 1. Cards solve grouping and entry-point problems; they are not automatically better than rows

Material Design frames cards as content and actions about a single subject. That supports the idea that a role can be a card-like unit, because one job at one company is a coherent subject. But Material also frames lists as continuous vertical indexes for finding items, and dividers as a way to group content and create hierarchy inside lists or containers.

NN/g similarly defines cards as flexible containers for a few related pieces of information, usually as short linked representations of conceptual units. NN/g also cautions that card layouts are less scannable and more space-consuming than predictable vertical lists when users need to search, compare, or find a specific item.

**Implication for `/experience`:** a role-level container is defensible, but it should not be assumed necessary when section headings and dividers already establish item boundaries. The more the portfolio behaves like a comparable career timeline, the more it benefits from row predictability rather than strong card chrome on every item.

### 2. Existing section dividers already provide one grouping mechanism

This repo's `/experience` page maps each `experience` to a `Section`. The `Section` component renders a title and, unless hidden, a divider after the section. That means company boundaries are already communicated by:

1. a section title;
2. vertical whitespace from section padding;
3. a horizontal divider after the section;
4. the chronological order of the page.

Material's divider guidance supports dividers as a legitimate grouping and hierarchy mechanism. GOV.UK spacing guidance also supports using a consistent responsive spacing scale to separate sections without adding a box around every item.

**Implication for `/experience`:** adding a full bordered, rounded role card inside every already-divided section can duplicate the grouping signal. If the section already says "this is one role/company chapter," the item itself can be an editorial row or low-contrast panel rather than a strong card.

### 3. Carbon points toward lightweight containers plus structured rows

Carbon's tile guidance says tiles can contain related content and can be used as foundations for more complex cards, but it also says tiles reside on the same plane as the page background and should not use elevation. Carbon distinguishes simple tiles from complex cards with multiple hierarchy patterns and actions.

Carbon's structured list is a closer match for the micro case-study internals: it presents grouped information in multiple rows, supports read-only rows, and is designed for logical, scannable patterns. It also discourages nesting when the data should remain simple.

**Implication for `/experience`:** if a container is kept, it should be a quiet role-level panel on the same visual plane as the page, with `Problem / Action / Result` as structured rows. Avoid card-within-card treatment for each micro case-study field.

### 4. GOV.UK supports summary cards only when extra grouping is needed

GOV.UK summary lists are for key facts. GOV.UK says multiple summary lists can be structured with headings or summary cards, and summary cards are useful when multiple lists describe the same type of thing or need actions that apply to an entire list. It also says the `details` component should help scanning only for information that not all users need, and should not hide content the majority need.

**Implication for `/experience`:** the portfolio does not need heavy summary-card styling for every role just to show facts. Headings, consistent rows, and spacing are enough for most roles. Since technical evaluators need the achievement evidence, core role content should remain visible in static HTML, not hidden behind JS accordions/details by default.

### 5. Apple HIG emphasizes grouping, hierarchy, and consistency rather than decorative containers

Apple's lists/tables guidance says list/table styles should coordinate with data and platform, and that visual details can communicate grouping and hierarchy. Apple's layout guidance emphasizes graceful adaptation and consistent recognizability.

**Implication for `/experience`:** choose one primary grouping language and apply it consistently. On this page, the natural language is an editorial timeline: section title, date, role, evidence rows, technologies. Strong card styling on every item plus section dividers can make the grouping language feel redundant.

### 6. Scanning research favors predictable rows for technical evaluators

NN/g's eyetracking research says users usually scan web pages rather than read every word. Effective pages support scanning with meaningful headings, subheadings, bullets, and visual styling for keywords. The layer-cake pattern is especially relevant: users scan headings/subheadings first, then read body text when a heading seems relevant.

A technical lead or hiring manager scanning `/experience` likely wants to compare roles quickly:

- company and timeframe;
- role relevance;
- problem handled;
- technical action taken;
- result or outcome;
- stack evidence.

**Implication for `/experience`:** predictable editorial rows make repeated evidence easier to compare. Strong card surfaces can help only if they clarify role boundaries; they hurt if they introduce extra visual weight without improving scan targets.

### 7. Skill tags should stay secondary metadata

Carbon says tags label, categorize, or organize items, and read-only tags have no interactive functionality. Carbon recommends concise tag titles and small tags in condensed or inline spaces; it also warns against wrapping individual tag titles across lines and against excessive multi-line tag groups.

**Implication for `/experience`:** technologies should read as metadata after the role evidence, not as clickable filters unless filtering actually exists. Compact read-only tags or quiet text metadata fit the sober portfolio tone better than large pill clusters.

## Role-level cards vs editorial list/timeline rows

| Option | Strengths | Risks | Best use here |
| --- | --- | --- | --- |
| Strong role-level card for every item | Clear containment; visually polished; each role feels like a standalone case-study module | Duplicates existing section dividers; increases page weight; can feel like a generic portfolio template; reduces density and comparison speed | Use sparingly for top featured roles only, if they need extra emphasis |
| Low-contrast role-level panel | Preserves a single role grouping; allows priority accents; keeps micro case-study content together | Still somewhat redundant if section spacing is strong; must avoid nested mini-cards | Good compromise for `featured` and maybe `supporting` roles |
| Editorial timeline/list row | High scannability; sober editorial feel; works with existing section titles/dividers; minimal visual noise | Needs careful spacing and typography so roles do not blur together; may feel plain if all emphasis is removed | Best default for this repo, especially because sections already divide items |
| Nested cards inside each role | Makes each Problem/Action/Result visually distinct | Over-cardification; noisy; weakens the role as the real conceptual unit; consumes space | Avoid |

## Recommendation for this repo

Use an **editorial timeline/list-row treatment as the default**, with optional low-contrast role-level panels for emphasis—not strong cards for every `/experience` item.

Rationale:

1. The page already renders each company as a separate `Section` with a title and divider, so a strong card around every item duplicates grouping.
2. The content is homogeneous and comparable: each role repeats role/date/summary/problem/action/result/skills. Predictable rows support scanning better than card-heavy modules.
3. The audience is technical evaluators first. They need evidence hierarchy and comparison speed more than decorative containment.
4. The desired tone is sober and professional; editorial rows feel more like a curated engineering record than a portfolio-template card grid.
5. Minimal JavaScript and static HTML are already aligned with visible rows, spacing, and CSS-only treatment.

### Practical design direction

- Keep the role as the conceptual unit, but let the **section title + divider + spacing** do most boundary work.
- Use a quiet left rule, date column, or subtle background only where it improves hierarchy.
- Reserve the strongest visual treatment for `featured` roles; progressively flatten `supporting` and `archive` roles.
- Keep `Problem / Action / Result` as a structured definition-list block with row dividers, not separate mini-cards.
- Keep tags compact, read-only, and visually secondary. Show the highest-signal tags first and use plain overflow text when needed.
- Do not add JS accordions, filters, or disclosure just to manage visual density.
- Do not hide core micro case-study evidence; technical evaluators should be able to scan it directly.

### Suggested hierarchy

1. Company heading from the surrounding section.
2. Role, priority, and timeframe as a compact metadata row.
3. One-sentence role summary.
4. Structured `Problem / Action / Result` rows.
5. Compact technology metadata.

### Decision rule

- If an item already has a section heading and divider, **do not add a strong card unless it changes the reader's understanding of priority**.
- If the role needs emphasis, use a low-contrast panel or left accent rather than elevation/shadow.
- If the visual goal is simply separation, prefer spacing and dividers over containers.

## Non-goals

- Do not edit implementation files as part of this research task.
- Do not propose a masonry/card grid for experience.
- Do not make every technology tag interactive unless there is a real link/filter destination.
- Do not hide main experience evidence behind disclosure controls.
- Do not remove the existing duration/timeline concept without explicit approval.
