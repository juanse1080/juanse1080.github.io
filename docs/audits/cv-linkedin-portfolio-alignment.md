# CV, LinkedIn, Canva, and Portfolio Alignment Audit

Date: 2026-08-22

Issue: #39

## Executive summary

- Overall readiness: #40 is structurally unblocked. It should perform the content reset using this audit rather than preserving the current stale/misaligned wording.
- Biggest blockers for #40:
  - MAIN 12 LLC is present in the LinkedIn PDF snapshot but missing from the website, public resume PDFs, and current Canva resumes.
  - The target positioning is now `Senior Software Engineer - Web, Cloud & AI Products`, while current surfaces still use mixed positioning such as `Software Engineer`, `AI/LLM Engineer`, `Cloud Engineer`, and `Fullstack Developer`.
  - Several claims use metrics that need Juan's confirmation before they remain numeric.
  - The LinkedIn PDF snapshot includes an unapproved dedicated-client name, but current project rules say the client must not be named publicly because Juan does not have permission.
- Recommended execution path:
  - #40 should draft the English CV first from a curated source narrative, then adapt to Spanish and ATS Markdown.
  - #41 should copy the existing Canva designs before editing and compress them toward a 1-2 page, sober premium resume.
  - #42 should prepare LinkedIn copy using optimized senior role titles while keeping client names confidential.
  - #43 should add MAIN 12 and updated resume links to the portfolio after the CV narrative is approved.

## Sources reviewed

| Surface | Source | Reviewed? | Notes |
| --- | --- | --- | --- |
| Website | Repository source under `src/locales`, `src/const`, and `src/app/[locale]` | Yes | Reviewed hero/about/experience/projects/skills/contact/resume links. |
| Website resume PDFs | `public/docs/CV/JuanMarcon.pdf`, `public/docs/CV/JuanMarconEnglish.pdf` | Yes | Existing public PDFs are Canva exports from 2025-12-09 and are stale relative to the LinkedIn snapshot/current strategy. |
| LinkedIn PDF snapshot | User-provided LinkedIn PDF snapshot generated 2026-08-21 | Yes | Snapshot was generated from LinkedIn on 2026-08-21 and is the freshest available experience source. |
| Canva EN | `DAF77SEK_44` (`Juan Marcon English`) | Yes | 3-page design; text content reviewed via Canva connector; page thumbnails/metadata retrieved. |
| Canva ES | `DAGDzu21sDM` (`Juan Marcon`) | Yes | 3-page design; text content reviewed via Canva connector; page thumbnails/metadata retrieved. |
| Live LinkedIn | Authenticated profile or user-provided capture | Not available / not reviewed | Public navigation previously hit LinkedIn authwall. Use the user-provided PDF snapshot as proxy until Juan provides authenticated access, text, or screenshots. |

## Alignment matrix

| Severity | Strength | Surface | Category | Observed content / summary | Why it matters | Disposition | Next issue |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Blocking | Required | Website, Canva EN, Canva ES, website resume PDFs | Missing content | MAIN 12 LLC appears in the LinkedIn PDF snapshot as current experience, but not in `src/const/experiences.ts`, homepage experience timeline, experience locale copy, public resume PDFs, or current Canva EN/ES content. | The current role is the freshest and highest-priority experience; omitting it makes the portfolio/CV look stale and prevents senior positioning from being credible. | Add after drafting safe wording. | #40, #43 |
| Blocking | Required | LinkedIn PDF snapshot | Confidentiality risk | The PDF says Juan collaborates with a named dedicated client. Project decisions state the dedicated client must not be named publicly because Juan does not have permission. | Copying this text into CV/website/LinkedIn would violate the Client Naming Permission rule. | Revise to client-facing/dedicated-client wording. | #40, #42, #43 |
| High | Required | Website, Canva EN, Canva ES, public PDFs | Title mismatch | Target headline is `Senior Software Engineer - Web, Cloud & AI Products`; current surfaces use `Software Engineer`, `AI/LLM Engineer`, `Cloud Engineer`, `Fullstack Developer`, and `Mid Software Developer`. | Mixed positioning weakens recruiter scan and makes senior-level complexity less explicit. | Normalize headline and role framing; preserve official titles only where necessary. | #40, #42, #43 |
| High | Required | Website | Stale content | Homepage about says `+5` years of experience and generic copy; issue decisions and CV surfaces use 6+ years. | A visible stale number reduces trust and conflicts with CV/LinkedIn positioning. | Revise after CV narrative is approved. | #43 |
| High | Required | Website | Missing content | Homepage company logos exclude MAIN 12 LLC; experience timeline includes Celerik, ConexaLab, Melonn, Mayasoft, Woombat, Bitnovo, Binary Groups, IPRED, UIS, and Freelance, but not MAIN 12. | The strongest current role is absent from the trust/evidence layer. | Add current role if public company naming is acceptable; keep client confidential. | #43 |
| High | Required | Website | Stale content | `src/const/experiences.ts` has Celerik with no `endDate`, but homepage timeline ends Celerik on 2025-12-05 and LinkedIn PDF shows Celerik ending December 2025. ConexaLab has no `endDate` in website source but Canva shows February 2025 and LinkedIn PDF says Present. | Conflicting dates make the CV/portfolio look unreliable and affect duration bars. | Use LinkedIn/PDF as freshest starting point, then confirm exact month/year where needed. | #40, #43 |
| High | Required | Canva EN, Canva ES | Readability/design | Both Canva designs are 3-page resumes with dense paragraph blocks and many stacked bullet-like sentences embedded in long text regions. | Recruiters and hiring managers need a faster scan; #41 should not polish an overlong content structure. | Compress after #40 draft; prefer 1-2 page visual CV. | #40, #41 |
| High | Required | Canva EN, Canva ES | Link/contact issue | Canva rich text includes duplicated empty Markdown-style link artifacts after portfolio and LinkedIn links, e.g. `[](https://...)`. | Exported text looks mechanically imported and can hurt PDF parsing/ATS extraction. | Remove link artifacts during Canva update. | #41 |
| High | Required | Canva EN, Canva ES, public PDFs | Claim risk | Mayasoft claims 30% reduction in delivery/operational times and approximately 40% fewer human errors/cost reductions. ConexaLab claims 30%+ time-to-market improvement and increased adoption. | Metrics may be strong but require interview-defendable source/context/calculation/contribution. | Revise or convert to qualitative unless Juan confirms defendibility. | #40 |
| Medium | Recommended | Website | Bilingual mismatch | Spanish homepage uses English labels such as `Education` and `Projects`. | The Spanish surface should remain high quality and intentional. | Fix in website sync. | #43 |
| Medium | Recommended | Website | Grammar/typo | English homepage says `Get a copy of me resume`, `broad perspective in Software Engineer`, and `Any type of query`; Spanish has `Acerca de mi` without accent and awkward course copy. | Visible language issues reduce credibility before users reach the CV. | Rewrite through conversion-copy work; do not fix inside #39. | #43 / existing copy issues |
| Medium | Recommended | Website | Link/contact issue | Website links resumes to `/docs/CV/JuanMarcon.pdf` and `/docs/CV/JuanMarconEnglish.pdf`, but the agreed future filenames are `Juan-Marcon-Resume.pdf` and `Juan-Marcon-CV-ES.pdf`. | Resume access will remain stale unless links and files are updated together. | Update after #41 exports final PDFs. | #41, #43 |
| Medium | Recommended | LinkedIn PDF snapshot | Grammar/typo | Snapshot has `Software Enginner`, `contribuí al diseñé`, `pagina`, `Ingenieria`, and mixed Spanish/English labels such as `Contactar`, `Home`, and `Personal`. | The snapshot should be a source of facts, not copy to reuse verbatim. | Use as evidence only; rewrite in #40/#42. | #40, #42 |
| Medium | Recommended | LinkedIn PDF snapshot | Confidentiality risk | Snapshot includes exact home address and phone label `Home`. | Low-conversion personal details should not appear in global CV unless Juan explicitly chooses them. | Remove/minimize in public CV; keep email, LinkedIn, portfolio, general location. | #40 |
| Medium | Recommended | Website, Canva EN, Canva ES | Title mismatch | Celerik appears as `Fullstack Developer` in website/Canva ES, `Cloud Engineer` in Canva EN, and `Mid Software Developer` in LinkedIn PDF snapshot. Grill decision says public positioning should use `Software Engineer` for Celerik. | Role-title drift makes the profile feel stitched together from different versions. | Normalize to `Software Engineer` in CV; LinkedIn can use optimized title if truthful. | #40, #42, #43 |
| Medium | Recommended | Canva EN, Canva ES | Title mismatch | Canva headline is `AI/LLM Engineer`, while approved positioning is `Senior Software Engineer - Web, Cloud & AI Products`. | `AI/LLM Engineer` narrows the market too much and underplays full-stack/cloud depth. | Replace with approved senior headline. | #40, #41, #42 |
| Medium | Recommended | Website | Readability/design | Skills are a flat technology list and do not include many AI/RAG terms now present in Canva. | Skills should support capability-led positioning rather than a generic stack list. | Convert after narrative/Capability Section work. | #43 / existing skills issue |
| Medium | Recommended | Website | Readability/design | Projects are described as public works for skill improvement; no project is clearly framed as trust-building evidence for LinkedIn Featured. | Featured should not include weak projects just to fill space. | Recommend portfolio + CV + GitHub until a project is audited as strong. | #42 |
| Low | Optional | Public PDFs | Stale content | Existing public PDFs are 2 pages and more compact than current Canva designs, but still omit MAIN 12 and use older positioning. | They show that a 2-page format is feasible, but content is stale. | Use layout compactness as reference only; replace with final exports. | #41, #43 |
| Low | Defer | Live LinkedIn | Missing content | Live profile was not reviewed due authentication/access limitations. | The audit can proceed, but #42 may benefit from live copy/screenshots before final paste-ready recommendations. | Use PDF snapshot as proxy; ask for live profile capture only if needed. | #42 |

## Critical gaps

### MAIN 12 LLC

MAIN 12 LLC is the most important gap. The LinkedIn PDF snapshot lists it as the current role, starting December 2025, in the United States. It describes end-to-end SaaS product work, client collaboration, AI adoption as a product core, product/UX/engineering decision-making, and scalable AI architecture patterns.

For public CV/portfolio/LinkedIn copy, the work should be framed as current full-time employment with dedicated-client product work, but the client name must be omitted. Use `client-facing SaaS and AI product work`, `dedicated-client product delivery`, or similar wording.

### Senior positioning

The approved headline is `Senior Software Engineer - Web, Cloud & AI Products`, but no reviewed live surface consistently uses it. Current website copy is generic and junior/mid-neutral; Canva is AI-forward; public PDFs are plain `Software Engineer`; the LinkedIn snapshot has a typo in `Software Enginner`.

#40 should make seniority explicit in the summary and evidence, then #42 can use optimized LinkedIn role titles where truthful.

### Confidentiality

The LinkedIn PDF snapshot names a dedicated client, but Juan has said he does not have permission to name the client publicly. All downstream copy should preserve the company MAIN 12 LLC as current employer while abstracting the client.

### Bilingual consistency

English should be primary. Spanish should be a LATAM adaptation, not a literal translation. The current Spanish website has English section labels and grammar issues; current Canva ES has natural Spanish in many sections but also typo/grammar issues such as `REsumen` and `Habilite`.

### Contact and resume access

Contact channels are present: email, LinkedIn, GitHub, and portfolio links appear across surfaces. The issue is not absence but consistency and cleanup:

- Website still links to older public PDFs under `/docs/CV/`.
- Canva rich text has duplicated empty link artifacts.
- LinkedIn PDF snapshot includes low-value personal details that should be removed from global CV.

## Claim dispositions

| Claim / metric | Surface(s) | Current wording | Risk | Disposition | Suggested direction |
| --- | --- | --- | --- | --- | --- |
| 6+ years of experience | LinkedIn PDF snapshot, Canva EN/ES | `6+ years` / `más de 6 años` | Website says `+5`; needs consistency. | Keep | Use `6+ years` across CV/LinkedIn/portfolio if dates support it. |
| MAIN 12 client work | LinkedIn PDF snapshot | Mentions direct client collaboration including the dedicated client. | The dedicated client name is not approved for public use. | Revise | `Deliver client-facing SaaS and AI product work for a dedicated external product team.` |
| MAIN 12 AI product adoption | LinkedIn PDF snapshot | AI as product core, not just acceleration tooling. | Strong but needs confidentiality-safe details. | Keep/revise | Keep concept; avoid internal product/client names. |
| Celerik monitoring platform | LinkedIn PDF, Canva EN/ES | Replaced subjective estimates with reliable execution indicators. | Strong and defensible if Juan can explain context. | Keep/revise | Use as core micro case study with concise problem/action/result. |
| Celerik LLM/RAG assistant | LinkedIn PDF, Canva EN/ES, website | Educational financial assistant using RAG/source-of-truth architecture. | Potential sensitive/internal detail; also needs concise wording. | Revise | Keep AI/RAG capability, abstract product specifics if needed. |
| ConexaLab 30%+ time-to-market reduction | Canva EN/ES | `reducing time-to-market by 30%+` | Requires source/calculation and personal contribution. | Convert to qualitative unless confirmed | `accelerated product evolution and reduced delivery friction through hexagonal architecture.` |
| ConexaLab increased user adoption | Canva EN | `increased user adoption` | Lacks context/sample. | Revise | Use qualitative wording unless adoption evidence exists. |
| Mayasoft 30% reduction in operational delivery times | Canva EN/ES, public PDFs | `30% reduction` | Requires context and source. | Convert to qualitative unless confirmed | `improved planning throughput and reduced manual coordination effort.` |
| Mayasoft approximately 40% fewer errors | Canva EN/ES, public PDFs | `~40%` / `approximately 40%` fewer human errors | Requires source and attribution. | Convert to qualitative unless confirmed | `reduced manual error risk through contract automation.` |
| Binary adding new channels without compromising performance | Canva EN/ES | Enabled new sales channels without compromising performance. | Plausible but broad; needs evidence. | Revise | `supported channel expansion through scalable e-commerce interfaces.` |
| Woombat accelerated product adoption | Canva EN/ES | Native browser APIs accelerated adoption and reduced integration effort. | Good architectural claim but should avoid overclaiming adoption without evidence. | Revise | Focus on reduced integration friction and framework compatibility. |
| Bitnovo performance/scalability improvement | Canva EN/ES | Technical decisions improved frontend performance, maintainability, and scalability. | Generic if not tied to specific work. | Convert to qualitative | Keep role compact; avoid unsupported broad result. |

## MAIN 12 data needs

| Field | Current evidence | Missing info | Recommended safe wording direction |
| --- | --- | --- | --- |
| Employer | LinkedIn PDF snapshot: `MAIN 12 LLC` | None | Use MAIN 12 LLC as current employer. |
| Public role title | LinkedIn PDF snapshot: `Software Enginner`; grill decision: senior positioning | Whether official title should be `Software Engineer` or optimized title can be used on CV | CV headline can use `Senior Software Engineer`; experience entry can use `Software Engineer` or `Senior Software Engineer` if truthful/approved. |
| Dates | LinkedIn PDF snapshot: December 2025 - Present | Confirm exact start month if needed; snapshot says December 2025 | Use `Dec 2025 - Present` unless Juan corrects it. |
| Location | LinkedIn PDF snapshot: United States | Whether remote/global should be shown | Use `Remote / United States-based client-facing work` only if appropriate; otherwise omit location. |
| Scope | LinkedIn PDF snapshot: end-to-end SaaS products, client needs to product solutions, scalable architecture | Product domain and stack are not fully public | `Deliver client-facing SaaS and AI product work, translating business needs into maintainable product architecture.` |
| AI responsibility | LinkedIn PDF snapshot: AI adoption as product core; scalable AI architecture | Specific LLM/RAG patterns, tools, and production outcomes | `Design AI-enabled product capabilities and architecture patterns while balancing speed, UX, and maintainability.` |
| Stack | LinkedIn PDF snapshot does not list stack for MAIN 12 | Need public-safe tech stack | Ask Juan or use `stack to confirm` in #40; do not invent. |
| Results | LinkedIn PDF snapshot gives qualitative outcomes only | Need concrete defendable outcomes if any | Use qualitative outcomes unless Juan provides metrics. |
| Confidentiality | User decision: no permission to name the dedicated client | None | Do not name the client; use dedicated-client/client-facing wording. |

## LinkedIn Featured recommendation

- Recommendation: use `portfolio + CV PDF + GitHub` for now.
- Include now:
  - Portfolio: `https://juanse1080.github.io`
  - Final English CV PDF after #41 export.
  - GitHub profile: `https://github.com/juanse1080`
- Defer until stronger evidence:
  - Individual projects such as Expense Track, Deeptools, or Crowdinvestment. Current project copy frames them mostly as skill-improvement/public works rather than strong production-grade evidence. Add a project to Featured only after #43/#34-style project curation identifies one with strong trust-building value.

## Open questions for #40

| Question | Why it matters | Safe fallback if unanswered |
| --- | --- | --- |
| Can Juan defend the 30%+ ConexaLab time-to-market metric with source/context/calculation/contribution? | Determines whether it stays numeric. | Convert to qualitative architecture/delivery acceleration wording. |
| Can Juan defend the Mayasoft 30% and 40% metrics? | These are strong but risky if unsupported. | Convert to qualitative operational-efficiency wording. |
| What public-safe stack should be listed for MAIN 12 LLC? | #40 should not invent technologies. | Use no stack or a broad `SaaS, AI product architecture, frontend/backend delivery` phrasing until confirmed. |
| Should MAIN 12 experience title be `Software Engineer` or `Senior Software Engineer`? | CV can sell senior complexity but should stay truthful. | Use headline `Senior Software Engineer - Web, Cloud & AI Products`; use experience title `Software Engineer` if unsure. |
| Should phone number appear in CV? | Global CV likely does not need it; local processes might. | Omit phone from global CV; keep email, LinkedIn, portfolio, general location. |
| Does Juan want UIS/IPRED early roles included in the 2-page CV? | Older roles add history but increase density. | Compact older roles or omit from visual CV; keep in LinkedIn if needed. |

## Next actions

- For #40:
  - Draft English CV first using senior, balanced web/cloud/AI positioning.
  - Add MAIN 12 as current role with confidentiality-safe wording.
  - Normalize Celerik to `Software Engineer` in public CV positioning.
  - Mark unconfirmed metrics for qualitative conversion unless Juan confirms defendibility.
  - Produce Spanish LATAM adaptation and curated ATS Markdown from the approved English source.
- For #41:
  - Copy Canva designs before editing.
  - Compress dense 3-page content toward a 1-2 page sober premium resume.
  - Remove duplicated empty link artifacts.
  - Export final PDFs to the agreed public paths after approval.
- For #42:
  - Prepare LinkedIn copy in English with optimized senior role titles.
  - Keep client names confidential; do not name the dedicated client.
  - Recommend Featured: portfolio, final CV PDF, GitHub; defer individual projects until curated.
- For #43:
  - Add MAIN 12 to website experience and company evidence if appropriate.
  - Update years-of-experience copy and resume links.
  - Fix Spanish/English label mismatches and keep bilingual copy coherent.
  - Preserve static generation and indexable HTML constraints.
