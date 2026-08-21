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
