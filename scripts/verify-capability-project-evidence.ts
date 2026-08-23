import { readFileSync } from "node:fs";
import { join } from "node:path";
import { capabilityIds, capabilities } from "../src/const/capabilities";
import { projectIds, projects } from "../src/const/projects";
import enHome from "../src/locales/en/home";
import esHome from "../src/locales/es/home";

const fail = (message: string): never => {
  throw new Error(message);
};

const readDist = (relativePath: string) =>
  readFileSync(join(process.cwd(), "dist", relativePath), "utf8");

const includes = (content: string, expected: string, context: string) => {
  if (!content.includes(expected)) {
    fail(`${context}: expected to include ${expected}`);
  }
};

const appSource = readFileSync("src/app/[locale]/page.tsx", "utf8");
const experienceIndex = appSource.indexOf("<Experience />");
const capabilityIndex = appSource.indexOf("<Capability />");
const projectIndex = appSource.indexOf("<Project />");

if (experienceIndex === -1 || capabilityIndex === -1 || projectIndex === -1) {
  fail("Landing page must render experience, capability, and project evidence sections");
}

if (!(experienceIndex < capabilityIndex && capabilityIndex < projectIndex)) {
  fail("Production experience must remain more prominent than capabilities and public projects");
}

for (const capability of capabilities) {
  if (!capabilityIds.includes(capability.id)) {
    fail(`${capability.id}: capability id must be registered`);
  }

  if (capability.technologies.length < 3) {
    fail(`${capability.id}: capabilities must expose supporting technologies`);
  }
}

if (capabilities.length < 5) {
  fail("Expected at least five professional capabilities");
}

for (const id of [
  "web_product_engineering",
  "cloud_backend_systems",
  "ai_assisted_products",
  "frontend_architecture_performance",
  "testing_delivery_quality",
] as const) {
  if (!capabilityIds.includes(id)) {
    fail(`${id}: missing required capability`);
  }
}

for (const [locale, messages] of [
  ["en", enHome],
  ["es", esHome],
] as const) {
  const capabilityCopy = messages.skill.capabilities;
  const projectCopy = messages.project.items;

  for (const id of capabilityIds) {
    const section = capabilityCopy[id];
    if (!section?.title || !section?.evidence || section.evidence.length < 40) {
      fail(`${locale}/${id}: missing capability title or evidence copy`);
    }
  }

  for (const id of projectIds) {
    const section = projectCopy[id];
    for (const field of ["problem", "solution", "stack", "result"] as const) {
      if (!section?.[field] || section[field].length < 24) {
        fail(`${locale}/${id}: ${field} must explain project evidence`);
      }
    }
  }
}

const englishHome = readDist("en/index.html");
const spanishHome = readDist("es/index.html");
const englishProjects = readDist("en/projects/index.html");
const spanishProjects = readDist("es/projects/index.html");

for (const [file, html] of [
  ["en/index.html", englishHome],
] as const) {
  includes(html, "Capabilities", file);
  includes(html, "Supporting technologies", file);
  includes(html, "web product engineering", file);
  includes(html, "cloud/backend systems", file);
  includes(html, "AI-assisted products", file);
  includes(html, "frontend architecture", file);
  includes(html, "testing and delivery quality", file);
}

for (const [file, html] of [
  ["es/index.html", spanishHome],
] as const) {
  includes(html, "Capacidades", file);
  includes(html, "Tecnologías de apoyo", file);
  includes(html, "ingeniería de producto web", file);
  includes(html, "sistemas cloud/backend", file);
  includes(html, "productos asistidos con IA", file);
}

for (const [file, html] of [
  ["en/index.html", englishHome],
  ["en/projects/index.html", englishProjects],
] as const) {
  includes(html, "Project Evidence", file);
  includes(html, "Problem", file);
  includes(html, "Solution", file);
  includes(html, "Stack", file);
  includes(html, "Result / learning", file);
}

for (const [file, html] of [
  ["es/index.html", spanishHome],
  ["es/projects/index.html", spanishProjects],
] as const) {
  includes(html, "Evidencia de Proyectos", file);
  includes(html, "Problema", file);
  includes(html, "Solución", file);
  includes(html, "Stack", file);
  includes(html, "Resultado / aprendizaje", file);
}

for (const project of projects) {
  if (!projectIds.includes(project.id)) {
    fail(`${project.id}: project id must be registered`);
  }

  if (project.skills.length < 3) {
    fail(`${project.id}: project evidence must include stack support`);
  }
}

console.log("Capability and project evidence verification passed.");
