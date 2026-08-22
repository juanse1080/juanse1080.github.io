import { Metadata } from "next";

export const siteUrl = "https://juanse1080.github.io";
export const socialPreviewImageUrl = `${siteUrl}/icon512_rounded.png`;

export type Locale = "en" | "es";
export type PublicRoute = "home" | "experience" | "projects";

type RouteSeo = {
  segment: "" | "experience" | "projects";
  title: Record<Locale, string>;
  description: Record<Locale, string>;
};

export const seoRoutes: Record<PublicRoute, RouteSeo> = {
  home: {
    segment: "",
    title: {
      en: "Juan Marcon | Senior Software Engineer for Web, Cloud & AI Products",
      es: "Juan Marcon | Senior Software Engineer para productos web, cloud e IA",
    },
    description: {
      en: "Senior Software Engineer focused on web, cloud, and AI-enabled products. Explore Juan Marcon's portfolio, experience, projects, resume, and contact links.",
      es: "Senior Software Engineer enfocado en productos web, cloud y habilitados con IA. Explora el portafolio, experiencia, proyectos, CV y canales de contacto de Juan Marcon.",
    },
  },
  experience: {
    segment: "experience",
    title: {
      en: "Juan Marcon | Software Engineering Experience",
      es: "Juan Marcon | Experiencia en software engineering",
    },
    description: {
      en: "Production experience across SaaS, AI-enabled products, cloud systems, frontend architecture, backend services, e-commerce integrations, and data visualization.",
      es: "Experiencia en producción con SaaS, productos habilitados con IA, sistemas cloud, arquitectura frontend, servicios backend, integraciones e-commerce y visualización de datos.",
    },
  },
  projects: {
    segment: "projects",
    title: {
      en: "Juan Marcon | Software Projects",
      es: "Juan Marcon | Proyectos de software",
    },
    description: {
      en: "Selected public projects that demonstrate Juan Marcon's software engineering judgment, product thinking, AI experience, and web development practice.",
      es: "Proyectos públicos seleccionados que demuestran criterio de software engineering, pensamiento de producto, experiencia con IA y práctica en desarrollo web.",
    },
  },
};

export const locales: Locale[] = ["en", "es"];
export const publicRoutes: PublicRoute[] = ["home", "experience", "projects"];

export const getPublicRoutePath = (locale: Locale, route: PublicRoute) => {
  const segment = seoRoutes[route].segment;
  return segment ? `/${locale}/${segment}/` : `/${locale}/`;
};

export const getCanonicalUrl = (locale: Locale, route: PublicRoute) =>
  `${siteUrl}${getPublicRoutePath(locale, route)}`;

export const getOpenGraphUrl = (locale: Locale, route: PublicRoute) =>
  getCanonicalUrl(locale, route);

export const getLocaleAlternates = (route: PublicRoute) => {
  const languages: Record<string, string> = Object.fromEntries(
    locales.map((locale) => [locale, getCanonicalUrl(locale, route)]),
  );

  if (route === "home") {
    languages["x-default"] = `${siteUrl}/`;
  }

  return languages;
};

export const getSeoMetadata = (
  locale: Locale,
  route: PublicRoute,
): Metadata => {
  const page = seoRoutes[route];
  const title = page.title[locale];
  const description = page.description[locale];
  const canonical = getCanonicalUrl(locale, route);
  const openGraphUrl = getOpenGraphUrl(locale, route);

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical,
      languages: getLocaleAlternates(route),
    },
    openGraph: {
      title,
      description,
      url: openGraphUrl,
      siteName: "Juan Marcon Portfolio",
      type: "website",
      locale: locale === "en" ? "en_US" : "es_CO",
      alternateLocale: locale === "en" ? ["es_CO"] : ["en_US"],
      images: [
        {
          url: socialPreviewImageUrl,
          width: 512,
          height: 512,
          alt: "Juan Marcon portfolio icon",
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [socialPreviewImageUrl],
    },
  };
};

export const sitemapUrls = publicRoutes.flatMap((route) =>
  locales.map((locale) => ({
    url: getCanonicalUrl(locale, route),
    alternates: getLocaleAlternates(route),
  })),
);

export const getPersonJsonLd = (locale: Locale) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Juan Marcon",
  alternateName: "juanse1080",
  jobTitle: "Senior Software Engineer",
  description: seoRoutes.home.description[locale],
  email: "mailto:juanmarcon@gmail.com",
  url: getCanonicalUrl("en", "home"),
  sameAs: [
    "https://github.com/juanse1080",
    "https://linkedin.com/in/juanmarcon",
  ],
  knowsAbout: [
    "Web product engineering",
    "Cloud systems",
    "AI-enabled products",
    "Frontend architecture",
    "Backend services",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "FastAPI",
    "AWS",
    "Google Cloud",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Universidad Industrial de Santander",
      alternateName: "UIS",
      url: "https://uis.edu.co/",
    },
  ],
  knowsLanguage: ["English", "Spanish"],
});
