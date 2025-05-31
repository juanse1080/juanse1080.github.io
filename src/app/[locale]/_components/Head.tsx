import { getCurrentLocale, getScopedI18n } from "locales/server";

const Head = async () => {
  const locale = getCurrentLocale();
  const t = await getScopedI18n("home");

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Juan Marcon",
    alternateName: "juanse1080",
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    inLanguage: locale,
    description: t("description"),
    email: "mailto:juanmarcon@gmail.com",
    image: "https://juanse1080.github.io/img/profile.webp",
    url: "https://juanse1080.github.io/",
    sameAs: [
      "https://github.com/juanse1080",
      "https://linkedin.com/in/juanmarcon",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default Head;
