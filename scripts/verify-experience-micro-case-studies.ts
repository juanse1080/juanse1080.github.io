import { readFileSync } from "node:fs";
import { experienceIds, experiences } from "../src/const/experiences";
import enExperience from "../src/locales/en/experience";
import esExperience from "../src/locales/es/experience";

const fail = (message: string): never => {
  throw new Error(message);
};


const experienceItemSource = readFileSync(
  "src/app/[locale]/experience/_components/ExperienceItem.tsx",
  "utf8",
);

if (experienceItemSource.includes("rounded-2xl border border-white/10 bg-black/10 p-4")) {
  fail("Experience micro case study fields should not render as nested mini-cards");
}

if (experienceItemSource.includes("flex gap-3 flex-wrap h-min mt-5")) {
  fail("Experience skill tags should use compact spacing instead of the old roomy chip group");
}

for (const expected of ["featured: 10", "supporting: 7", "archive: 5"] as const) {
  if (!experienceItemSource.includes(expected)) {
    fail(`Experience skill tags must keep the visible density ceiling: ${expected}`);
  }
}

const ids = experiences.map((experience) => experience.id);

for (const id of experienceIds) {
  if (!ids.includes(id)) {
    fail(`${id}: full experience history must remain available on the experience page`);
  }
}

const priorities = experiences.map((experience) => experience.priority);
if (priorities.filter((priority) => priority === "featured").length < 3) {
  fail("expected at least three featured roles for prioritized experience");
}

for (const experience of experiences) {
  if (!experience.localizedCaseStudy) {
    fail(`${experience.id}: missing localized micro case study keys`);
  }

  if (experience.localizedCaseStudy.summaryKey !== `${experience.id}.summary`) {
    fail(`${experience.id}: summaryKey must point to its localized summary copy`);
  }

  if (experience.localizedCaseStudy.problemKey !== `${experience.id}.problem`) {
    fail(`${experience.id}: problemKey must point to its localized problem copy`);
  }

  if (experience.localizedCaseStudy.actionKey !== `${experience.id}.action`) {
    fail(`${experience.id}: actionKey must point to its localized action copy`);
  }

  if (experience.localizedCaseStudy.resultKey !== `${experience.id}.result`) {
    fail(`${experience.id}: resultKey must point to its localized result copy`);
  }
}

for (const [locale, messages] of [
  ["en", enExperience],
  ["es", esExperience],
] as const) {
  const sections = messages.sections as Record<string, { summary: string; problem: string; action: string; result: string }>;

  for (const experience of experiences) {
    const section = sections[experience.id];

    if (!section) {
      fail(`${locale}/${experience.id}: missing localized experience section`);
    }

    for (const field of ["summary", "problem", "action", "result"] as const) {
      if (!section[field] || section[field].length < 24) {
        fail(`${locale}/${experience.id}: ${field} must be specific micro case study copy`);
      }
    }
  }
}


const alignedClaimTokens = {
  "main-12": { en: ["SaaS", "AI", "Google Cloud"], es: ["SaaS", "IA", "Google Cloud"] },
  celerik: { en: ["LLM", "RAG", "Azure"], es: ["LLM", "RAG", "Azure"] },
  conexalab: { en: ["real-time", "maps", "hexagonal"], es: ["tiempo real", "mapas", "hexagonal"] },
  melonn: { en: ["e-commerce", "AWS", "Cognito"], es: ["comercio electrónico", "AWS", "Cognito"] },
} as const;

const enContent = JSON.stringify(enExperience.sections);
const esContent = JSON.stringify(esExperience.sections);


for (const [id, tokens] of Object.entries(alignedClaimTokens)) {
  const enSection = JSON.stringify(enExperience.sections[id as keyof typeof enExperience.sections]);
  const esSection = JSON.stringify(esExperience.sections[id as keyof typeof esExperience.sections]);

  for (const token of tokens.en) {
    if (!enSection.includes(token)) {
      fail(`en/${id}: expected aligned claim token ${token}`);
    }
  }

  for (const token of tokens.es) {
    if (!esSection.includes(token)) {
      fail(`es/${id}: expected aligned claim token ${token}`);
    }
  }
}

for (const forbidden of ["internal product name", "confidential client", "proprietary detail"] as const) {
  if (enContent.includes(forbidden) || esContent.includes(forbidden)) {
    fail(`experience copy must avoid sensitive placeholder/internal detail: ${forbidden}`);
  }
}

console.log("Experience micro case study verification passed.");
