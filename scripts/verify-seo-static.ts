import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import {
  getCanonicalUrl,
  getLocaleAlternates,
  getOpenGraphUrl,
  getPersonJsonLd,
  getPublicRoutePath,
  locales,
  publicRoutes,
  seoRoutes,
  siteUrl,
  socialPreviewImageUrl,
  type Locale,
  type PublicRoute,
} from "../src/seo";

const fail = (message: string): never => {
  throw new Error(message);
};

const readDist = (relativePath: string) =>
  readFileSync(join(process.cwd(), "dist", relativePath), "utf8");

const htmlEscape = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/'/g, "&#x27;");

const includes = (content: string, expected: string, context: string) => {
  if (!content.includes(expected)) {
    fail(`${context}: expected to include ${expected}`);
  }
};

const includesHtml = (content: string, expected: string, context: string) =>
  includes(content, htmlEscape(expected), context);

const getDistFile = (locale: Locale, route: PublicRoute) => {
  const path = getPublicRoutePath(locale, route).replace(/^\//, "");
  return `${path}index.html`;
};

for (const route of publicRoutes) {
  for (const locale of locales) {
    const page = seoRoutes[route];
    const title = page.title[locale];
    const description = page.description[locale];
    const canonical = getCanonicalUrl(locale, route);
    const html = readDist(getDistFile(locale, route));
    const file = getDistFile(locale, route);

    includesHtml(html, `<title>${title}</title>`, file);
    includes(
      html,
      `<meta name="description" content="${htmlEscape(description)}"`,
      file,
    );
    includes(html, `<link rel="canonical" href="${canonical}"`, file);

    for (const [hreflang, href] of Object.entries(getLocaleAlternates(route))) {
      includes(
        html,
        `<link rel="alternate" hrefLang="${hreflang}" href="${href}"`,
        file,
      );
    }

    includesHtml(html, `<meta property="og:title" content="${title}"`, file);
    includes(
      html,
      `<meta property="og:description" content="${htmlEscape(description)}"`,
      file,
    );
    includes(html, `<meta property="og:url" content="${getOpenGraphUrl(locale, route)}"`, file);
    includes(
      html,
      `<meta property="og:image" content="${socialPreviewImageUrl}"`,
      file,
    );
    includes(html, `<meta name="twitter:card" content="summary"`, file);
    includesHtml(html, `<meta name="twitter:title" content="${title}"`, file);
    includes(
      html,
      `<meta name="twitter:description" content="${htmlEscape(description)}"`,
      file,
    );
    includes(
      html,
      `<meta name="twitter:image" content="${socialPreviewImageUrl}"`,
      file,
    );

    const jsonLdMatch = html.match(
      /<script type="application\/ld\+json">(?<json>.*?)<\/script>/,
    );
    const jsonLdContent =
      jsonLdMatch?.groups?.json ?? fail(`${file}: expected Person JSON-LD script`);

    const jsonLd = JSON.parse(jsonLdContent);
    const expectedJsonLd = getPersonJsonLd(locale);
    if (jsonLd["@type"] !== expectedJsonLd["@type"]) {
      fail(`${file}: expected JSON-LD @type Person`);
    }
    if ("worksFor" in jsonLd) {
      fail(`${file}: JSON-LD must not include stale worksFor`);
    }
    if ("image" in jsonLd) {
      fail(`${file}: JSON-LD must omit image until a person image exists`);
    }
  }
}

const rootHtml = readDist("index.html");
includesHtml(rootHtml, `<title>${seoRoutes.home.title.en}</title>`, "index.html");
includes(rootHtml, `<link rel="canonical" href="${getCanonicalUrl("en", "home")}"`, "index.html");
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
for (const route of publicRoutes) {
  for (const locale of locales) {
    includes(sitemap, `<loc>${getCanonicalUrl(locale, route)}</loc>`, "sitemap.xml");
  }
}
if (sitemap.includes(`<loc>${siteUrl}/</loc>`)) {
  fail("sitemap.xml: root alias must not be listed as a canonical URL");
}

console.log("SEO static artifact verification passed.");
