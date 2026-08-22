# Juan Marcon Portfolio

This context defines the product language for Juan Marcon's personal portfolio. The site exists to generate professional opportunities through a fast, static, bilingual portfolio optimized for technical evaluation and AI-assisted maintenance.

## Language

**Opportunity Portfolio**:
A personal site optimized to generate job or collaboration opportunities by communicating technical credibility, professional positioning, and proof of impact.
_Avoid_: generic portfolio, personal website, CV page

**Primary Audience**:
Technical leads and hiring managers who evaluate engineering judgment, delivery history, architecture awareness, and product impact.
_Avoid_: general visitors, everyone, developers only

**Secondary Audience**:
Recruiters who need a clear, fast summary of role fit, seniority, technologies, contact information, and resume access.
_Avoid_: HR users, traffic, audience

**Professional Promise**:
The first impression the site must communicate: Juan is a Software Engineer specialized in web, cloud, and AI products, focused on performance, architecture, and value delivery.
_Avoid_: tagline, slogan, hero text

**Static Portfolio**:
A portfolio delivered as static assets without a runtime server, optimized for fast loading, simple hosting, and indexable output.
_Avoid_: dynamic app, SSR app, Next app

**Indexable Static HTML**:
Exported route HTML that contains the route's meaningful text content, links, headings, and primary evidence before client-side JavaScript runs, so search engines and technical evaluators can inspect the page as a static document.
_Avoid_: build success, hydrated content, client-rendered page

**Performance Budget**:
The quality bar for shipping changes: Lighthouse Performance 95+, SEO 100, Accessibility 95+, minimal initial JavaScript, lazy non-critical images, and indexable HTML on every route.
_Avoid_: performance goal, optimization target

**Agent-Ready Repository**:
A repository structured so AI agents can safely understand goals, vocabulary, decisions, constraints, and verification steps without rediscovering project intent each session.
_Avoid_: documented repo, AI-friendly repo

**Technical Posture**:
The intended impression of the implementation: technical but sober, fast and maintainable, with engineering discipline visible without unnecessary complexity.
_Avoid_: showcase, experimental site, over-engineered portfolio

**Conversion to Opportunity**:
The site's primary success outcome: a qualified visitor understands Juan's fit and takes a next step such as contacting him, downloading the resume, visiting LinkedIn, or reviewing relevant work.
_Avoid_: conversion, lead, CTA click

**External Conversion Surface**:
A non-website artifact that helps turn professional attention into opportunities, especially the Canva resume/CV and LinkedIn profile. These surfaces should reinforce the Opportunity Portfolio's narrative while adapting depth and format to their channel.
_Avoid_: external profile, social media, document

**Source Narrative**:
The canonical professional story that all conversion surfaces should share: Juan is a Software Engineer focused on web, cloud, and AI products, with architecture, performance, and product impact as the through-line.
_Avoid_: master copy, brand message, positioning text

**Freshest Experience Source**:
The source with the most up-to-date role history at a given moment. LinkedIn may temporarily be the Freshest Experience Source when the website and Canva resume lag behind, but it does not replace the Source Narrative once the portfolio is updated.
_Avoid_: source of truth, latest CV, current profile

**Execution Priority Surface**:
The conversion surface currently optimized first for practical opportunity impact. The Source Narrative may still live on the website, but the immediate work can prioritize the CV and LinkedIn when they are the highest-leverage surfaces.
_Avoid_: main channel, priority artifact, current task

**Evidence Hierarchy**:
The order in which proof should be presented to technical evaluators: production experience, measurable impact, architecture trade-offs, technology stack, then public projects.
_Avoid_: content order, proof list

**Astro Migration Trigger**:
The condition for considering Astro: Next static export fails to meet the Performance Budget after reasonable optimization work.
_Avoid_: migration idea, Astro option, framework preference

**Agent Documentation Set**:
The compact documentation package required for safe AI-assisted work: CONTEXT.md, ADRs, performance/SEO checklist, and repo-specific AGENTS.md.
_Avoid_: docs, process, AI docs

**Landing Page**:
The home page that explains the Professional Promise, presents the strongest evidence, and drives visitors toward contact or LinkedIn.
_Avoid_: home, index page

**Primary Call to Action**:
The main next step for qualified visitors: contact Juan by email or LinkedIn.
_Avoid_: CTA, main button, conversion button

**Secondary Call to Action**:
A supporting next step for visitors who need more evidence before contact, primarily viewing or downloading the resume.
_Avoid_: backup CTA, secondary button

**Micro Case Study**:
A compact experience entry that explains the problem, technical action, and result without becoming a long-form article.
_Avoid_: experience bullet, job description, case study

**Project Evidence**:
Public project content used as secondary proof of technical judgment and ability to build usable software.
_Avoid_: portfolio item, side project, project card

**Visual Posture**:
A modern visual style with subtle animation that supports credibility without hurting performance or distracting from the message.
_Avoid_: fancy design, animations, visual style

**Shipping Checklist**:
The required verification set before completing repository changes: build passes, static HTML is indexable, Lighthouse budget holds, internal links work, SEO metadata is complete, JavaScript stays minimal, ES/EN copy remains coherent, and accessibility basics pass.
_Avoid_: done checklist, QA checklist

**Technology Migration Gate**:
The rule that framework or architecture migrations may be proposed as tasks, but require explicit user approval and an accepted ADR before implementation.
_Avoid_: migration rule, tech change approval

**Primary Locale**:
English is the primary language for global opportunities and should be served at the root route when practical.
_Avoid_: default language, main language

**Static Language Switch**:
A language selector implemented as normal links between locale routes, without client-side state or unnecessary React hydration.
_Avoid_: language toggle, locale button

**Native Anchor Navigation**:
Anchor navigation that relies on browser behavior and CSS smooth scrolling instead of custom client-side scroll code.
_Avoid_: hash scroll, custom scroll handler

**Client JavaScript Exception**:
A small client-side behavior kept only when it directly supports Conversion to Opportunity, accessibility, or essential UX and cannot be replaced by static HTML/CSS without losing that value.
_Avoid_: interactive polish, convenience script, hydration by default

**Explicit Experience Dates**:
Experience date data stored deliberately in content/data and used to render duration visuals without relying on hidden runtime assumptions.
_Avoid_: dynamic dates, date calculation

**Experience Duration Bar**:
A visual bar where length represents time spent in a role. It is part of the experience evidence model and may keep build-time date calculations if they remain static-output friendly and understandable to agents.
_Avoid_: timeline bar, matrix, date bar

**Generated Artifact Policy**:
Build output directories such as `.next/` and `dist/` should not be treated as source of truth when GitHub Actions can produce and upload static artifacts.
_Avoid_: committed build, generated output

**Conversion Copy**:
Portfolio text written to help qualified technical evaluators understand fit, evidence, and next steps quickly.
_Avoid_: nice copy, marketing text, website text

**Defensible Claim**:
A professional claim that Juan can explain in an interview with concrete context, technical actions, and honest impact.
_Avoid_: achievement, metric, selling point

**Impact Metric**:
A numeric or approximate result used only when it is defendable in interview; otherwise the content should use qualitative impact.
_Avoid_: KPI, number, stat

**Confidentiality Boundary**:
The content rule for professional work: company names and general outcomes may be mentioned, but internal product names, sensitive implementation details, or NDA-protected context should stay abstract.
_Avoid_: NDA, private details, sensitive info

**AI Capability**:
Juan's practical ability to build with LLMs, RAG, and AI-assisted product features. It is a strong capability within the web/cloud/AI positioning, not the site's only identity.
_Avoid_: AI branding, AI hype, AI-only profile

**Availability Signal**:
A subtle statement that Juan is open to software engineering opportunities focused on web, cloud, and AI products.
_Avoid_: job-seeking banner, hire me, open to work

**Content Correctness Rule**:
Every portfolio claim must be clear, technically precise, defendable in interview, opportunity-oriented, and coherent across English and Spanish.
_Avoid_: good copy, polished text

**Contact Channel**:
The conversion paths that should be equally visible for qualified visitors: LinkedIn and email, without adding a custom contact form.
_Avoid_: contact form, lead form, primary contact

**Resume Access**:
A direct link and download path to the PDF resume, without embedding the PDF into the page.
_Avoid_: resume page, embedded CV, PDF viewer

**Company Logo Evidence**:
Company logos used with contextual text to support credibility, not as standalone proof.
_Avoid_: logo strip, social proof logos

**Capability Section**:
A skills section framed around professional capabilities such as web product engineering, cloud/backend systems, AI-assisted products, frontend architecture/performance, and testing/delivery quality, with technology chips as support.
_Avoid_: skills list, tech stack chips

**Prioritized Experience**:
An experience presentation that keeps the full career history but gives more detail and prominence to the most relevant roles.
_Avoid_: full CV, chronological list only

**Senior Positioning**:
The external positioning that presents Juan as ready for senior-level software engineering complexity through ownership, architecture judgment, cross-functional delivery, and production impact. It may be used in headlines and summaries even when individual experience entries preserve official role titles.
_Avoid_: inflated title, seniority claim, job title rewrite

**Dedicated Client Work**:
Current or recent employment where Juan works full-time through an employer for a specific client. Public copy may describe it as client-facing product work without naming the client unless the client relationship is explicitly approved for public use.
_Avoid_: freelance, side client, unnamed company

**Client Naming Permission**:
The explicit permission required before naming a dedicated client in public portfolio, CV, or LinkedIn copy. Without permission, copy should describe the work by product type, audience, and technical scope rather than by client name.
_Avoid_: client mention, public client, named account

**Optimized Role Title**:
A public-facing role title chosen to improve market clarity while staying truthful to the work performed. LinkedIn may use optimized titles more aggressively than the CV, but the surrounding copy must remain defensible.
_Avoid_: invented title, keyword title, inflated role

**Curated ATS Resume**:
A simple, machine-readable resume version that follows the same selected narrative as the visual CV instead of dumping the full LinkedIn history or keyword-stuffing.
_Avoid_: ATS dump, plain CV, keyword resume

**Approved Resume Export**:
A final PDF resume/CV generated from approved source copy and reviewed Canva design copies, ready to be served as a static repository asset.
_Avoid_: Canva draft, latest PDF, exported file

**Resume Export Log**:
A compact repository record that links the Canva design copies, approved source drafts, export date, target PDF paths, and quality checks used to produce an Approved Resume Export.
_Avoid_: notes, manual checklist, Canva links

**LinkedIn Profile Copy**:
Paste-ready English copy for Juan's LinkedIn profile that adapts the Source Narrative to LinkedIn's profile fields while preserving confidentiality, defendable claims, and senior positioning.
_Avoid_: LinkedIn rewrite, social copy, profile notes

**LinkedIn Featured Plan**:
The ordered recommendation for LinkedIn Featured items, starting with the Opportunity Portfolio, Approved Resume Export, and GitHub profile, while deferring individual projects until they satisfy the Project Inclusion Rule.
_Avoid_: featured links, LinkedIn media list, profile attachments


**SEO Foundation**:
The public metadata layer that lets crawlers, search previews, and locale-aware tools understand each Static Portfolio route: focused titles and descriptions, canonical URLs, locale alternatives, social preview metadata, robots, sitemap, and valid JSON-LD.
_Avoid_: SEO polish, metadata cleanup, search tweaks

**Canonical Public URL**:
The preferred absolute URL for a public route when aliases or locale rewrites exist. Canonicals should point to the clean route intended for indexing, not merely the route a visitor happened to load.
_Avoid_: current URL, permalink, page URL

**Locale Alternative Link**:
A language-specific relationship between equivalent English and Spanish public routes, expressed for crawlers through `hreflang` metadata.
_Avoid_: translation link, language switch URL, alternate page

**Social Preview Metadata**:
Open Graph and Twitter card metadata that controls how a public route appears when shared outside the portfolio. It should summarize the same visible page intent rather than introduce new claims.
_Avoid_: social SEO, share image tags, preview polish

**Alignment Audit**:
A versioned review that compares the portfolio, LinkedIn snapshot, Canva CVs, and resume sources to identify stale content, missing experience, title mismatches, claim risk, confidentiality issues, and readiness for rewrite work.
_Avoid_: review notes, content check, audit comment

**Claim Disposition**:
The action assigned to a professional claim or metric after review: keep, revise, convert to qualitative, or remove. A claim is defendable when Juan can explain its source, context, approximate calculation, and his contribution in an interview.
_Avoid_: claim status, metric decision, content note

**Project Inclusion Rule**:
A public project should remain visible only if it has evidence, a strong learning, a usable demo/repo, or a clear technical reason to build trust.
_Avoid_: project list, side project rule

**Keyword Strategy**:
SEO should prioritize brand plus role searches: Juan Marcon Software Engineer, Juan Marcon Fullstack Developer, Software Engineer Web Cloud AI, React Next.js TypeScript Engineer, and Cloud Engineer AI Products.
_Avoid_: SEO keywords, search terms

**Analytics Posture**:
The site should ship without analytics initially; lightweight analytics such as Plausible or Umami may be considered later only if measurement is needed.
_Avoid_: tracking, Google Analytics, metrics script

**Animation Rule**:
Visual motion should be CSS-first; JavaScript animation is acceptable only when it improves conversion or accessibility.
_Avoid_: animation policy, motion rule
