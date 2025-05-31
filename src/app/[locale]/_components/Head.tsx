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
    knowsAbout: [
      "AWS",
      "Typescript",
      "Next JS",
      "React JS",
      "React Native",
      "Angular",
      "Node JS",
      "Nest JS",
      "Jest",
      "Python",
      "FastAPI",
      "Playwright",
      "Docker",
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Universidad Industrial de Santander",
        alternateName: "UIS",
        url: "https://uis.edu.co/",
        logo: "https://web.uis.edu.co/wp-content/uploads/elementor/thumbs/Logo-UIS-web-qbqj494k91py9kvbai0ukya46twhbb1tj22br6je4k.webp",
        address: "Calle 27 # 8-23, Bucaramanga, Colombia",
        email: "info@uis.edu.co",
        phone: "+57 317 890 1234",
      },
    ],
    knowsLanguage: ["Spanish"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default Head;
