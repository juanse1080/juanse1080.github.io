import { readFileSync } from "node:fs";
import { join } from "node:path";
import { linkedInProfileUrl, publicEmail, publicEmailHref } from "../src/const/profile";
import { getPersonJsonLd } from "../src/seo";

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

const excludes = (content: string, forbidden: string, context: string) => {
  if (content.includes(forbidden)) {
    fail(`${context}: must not include ${forbidden}`);
  }
};


const englishHome = readDist("en/index.html");
const spanishHome = readDist("es/index.html");

for (const [file, html] of [
  ["en/index.html", englishHome],
  ["es/index.html", spanishHome],
] as const) {
  includes(html, "Senior Software Engineer", file);
  includes(html, publicEmail, file);
  includes(html, publicEmailHref, file);
  includes(html, linkedInProfileUrl, file);
  includes(html, "/resume/", file);
  excludes(html, "juanmarcon@gmail.com", file);
}

includes(englishHome, "web, cloud, and AI-enabled products", "en/index.html");
includes(englishHome, "architecture", "en/index.html");
includes(englishHome, "performance", "en/index.html");
includes(englishHome, "product impact", "en/index.html");
includes(englishHome, "SaaS", "en/index.html");
includes(englishHome, "e-commerce", "en/index.html");
includes(englishHome, "data visualization", "en/index.html");
includes(englishHome, "Open to aligned", "en/index.html");
includes(englishHome, "View / download resume", "en/index.html");

includes(spanishHome, "productos web, cloud y habilitados con IA", "es/index.html");
includes(spanishHome, "arquitectura", "es/index.html");
includes(spanishHome, "performance", "es/index.html");
includes(spanishHome, "impacto de producto", "es/index.html");
includes(spanishHome, "SaaS", "es/index.html");
includes(spanishHome, "e-commerce", "es/index.html");
includes(spanishHome, "visualización de datos", "es/index.html");
includes(spanishHome, "Abierto a oportunidades", "es/index.html");
includes(spanishHome, "Ver / descargar CV", "es/index.html");

if (getPersonJsonLd("en").email !== publicEmailHref) {
  fail("Person JSON-LD email must match the canonical visible email");
}

console.log("Landing conversion copy verification passed.");
