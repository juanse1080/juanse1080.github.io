import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const siteUrl = "https://juanse1080.github.io";
const pages = [
  {
    file: "en/index.html",
    canonical: `${siteUrl}/en/`,
    title: "Juan Marcon | Senior Software Engineer for Web, Cloud & AI Products",
    description:
      "Senior Software Engineer focused on web, cloud, and AI-enabled products. Explore Juan Marcon's portfolio, experience, projects, resume, and contact links.",
    alternates: {
      en: `${siteUrl}/en/`,
      es: `${siteUrl}/es/`,
      "x-default": `${siteUrl}/`,
    },
  },
  {
    file: "es/index.html",
    canonical: `${siteUrl}/es/`,
    title: "Juan Marcon | Senior Software Engineer para productos web, cloud e IA",
    description:
      "Senior Software Engineer enfocado en productos web, cloud y habilitados con IA. Explora el portafolio, experiencia, proyectos, CV y canales de contacto de Juan Marcon.",
    alternates: {
      en: `${siteUrl}/en/`,
      es: `${siteUrl}/es/`,
      "x-default": `${siteUrl}/`,
    },
  },
  {
    file: "en/experience/index.html",
    canonical: `${siteUrl}/en/experience/`,
    title: "Juan Marcon | Software Engineering Experience",
    description:
      "Production experience across SaaS, AI-enabled products, cloud systems, frontend architecture, backend services, e-commerce integrations, and data visualization.",
    alternates: {
      en: `${siteUrl}/en/experience/`,
      es: `${siteUrl}/es/experience/`,
    },
  },
  {
    file: "es/experience/index.html",
    canonical: `${siteUrl}/es/experience/`,
    title: "Juan Marcon | Experiencia en software engineering",
    description:
      "Experiencia en producción con SaaS, productos habilitados con IA, sistemas cloud, arquitectura frontend, servicios backend, integraciones e-commerce y visualización de datos.",
    alternates: {
      en: `${siteUrl}/en/experience/`,
      es: `${siteUrl}/es/experience/`,
    },
  },
  {
    file: "en/projects/index.html",
    canonical: `${siteUrl}/en/projects/`,
    title: "Juan Marcon | Software Projects",
    description:
      "Selected public projects that demonstrate Juan Marcon's software engineering judgment, product thinking, AI experience, and web development practice.",
    alternates: {
      en: `${siteUrl}/en/projects/`,
      es: `${siteUrl}/es/projects/`,
    },
  },
  {
    file: "es/projects/index.html",
    canonical: `${siteUrl}/es/projects/`,
    title: "Juan Marcon | Proyectos de software",
    description:
      "Proyectos públicos seleccionados que demuestran criterio de software engineering, pensamiento de producto, experiencia con IA y práctica en desarrollo web.",
    alternates: {
      en: `${siteUrl}/en/projects/`,
      es: `${siteUrl}/es/projects/`,
    },
  },
];

const fail = (message) => {
  throw new Error(message);
};

const readDist = (relativePath) =>
  readFileSync(join(process.cwd(), "dist", relativePath), "utf8");

const htmlEscape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("'", "&#x27;");

const includes = (content, expected, context) => {
  if (!content.includes(expected)) {
    fail(`${context}: expected to include ${expected}`);
  }
};

const includesHtml = (content, expected, context) =>
  includes(content, htmlEscape(expected), context);

for (const page of pages) {
  const html = readDist(page.file);
  includesHtml(html, `<title>${page.title}</title>`, page.file);
  includes(
    html,
    `<meta name="description" content="${htmlEscape(page.description)}"`,
    page.file,
  );
  includes(html, `<link rel="canonical" href="${page.canonical}"`, page.file);

  for (const [hreflang, href] of Object.entries(page.alternates)) {
    includes(
      html,
      `<link rel="alternate" hrefLang="${hreflang}" href="${href}"`,
      page.file,
    );
  }

  includesHtml(html, `<meta property="og:title" content="${page.title}"`, page.file);
  includes(
    html,
    `<meta property="og:description" content="${htmlEscape(page.description)}"`,
    page.file,
  );
  includes(html, `<meta property="og:url" content="${page.canonical}"`, page.file);
  includes(
    html,
    `<meta property="og:image" content="${siteUrl}/icon512_rounded.png"`,
    page.file,
  );
  includes(html, `<meta name="twitter:card" content="summary"`, page.file);
  includesHtml(html, `<meta name="twitter:title" content="${page.title}"`, page.file);
  includes(
    html,
    `<meta name="twitter:description" content="${htmlEscape(page.description)}"`,
    page.file,
  );
  includes(
    html,
    `<meta name="twitter:image" content="${siteUrl}/icon512_rounded.png"`,
    page.file,
  );

  const jsonLdMatch = html.match(
    /<script type="application\/ld\+json">(?<json>.*?)<\/script>/,
  );
  if (!jsonLdMatch?.groups?.json) {
    fail(`${page.file}: expected Person JSON-LD script`);
  }
  const jsonLd = JSON.parse(jsonLdMatch.groups.json);
  if (jsonLd["@type"] !== "Person") {
    fail(`${page.file}: expected JSON-LD @type Person`);
  }
  if ("worksFor" in jsonLd) {
    fail(`${page.file}: JSON-LD must not include stale worksFor`);
  }
  if ("image" in jsonLd) {
    fail(`${page.file}: JSON-LD must omit image until a person image exists`);
  }
}


const rootHtml = readDist("index.html");
includesHtml(
  rootHtml,
  "<title>Juan Marcon | Senior Software Engineer for Web, Cloud & AI Products</title>",
  "index.html",
);
includes(rootHtml, `<link rel="canonical" href="${siteUrl}/en/"`, "index.html");
includes(
  rootHtml,
  `<link rel="alternate" hrefLang="x-default" href="${siteUrl}/"`,
  "index.html",
);


for (const rootAlias of ["experience/index.html", "projects/index.html"]) {
  if (existsSync(join(process.cwd(), "dist", rootAlias))) {
    fail(`dist/${rootAlias}: internal root-level aliases are out of scope`);
  }
}

const robots = readDist("robots.txt");
if (!/User-Agent: \*/i.test(robots)) {
  fail("robots.txt: expected user-agent allow rule");
}
includes(robots, "Allow: /", "robots.txt");
includes(robots, `Sitemap: ${siteUrl}/sitemap.xml`, "robots.txt");

const sitemap = readDist("sitemap.xml");
for (const url of [
  `${siteUrl}/en/`,
  `${siteUrl}/es/`,
  `${siteUrl}/en/experience/`,
  `${siteUrl}/es/experience/`,
  `${siteUrl}/en/projects/`,
  `${siteUrl}/es/projects/`,
]) {
  includes(sitemap, `<loc>${url}</loc>`, "sitemap.xml");
}
if (sitemap.includes(`<loc>${siteUrl}/</loc>`)) {
  fail("sitemap.xml: root alias must not be listed as a canonical URL");
}

console.log("SEO static artifact verification passed.");
