import { PropsWithChildren } from "react";
import { fontPoppins } from "theme/fonts";
import "theme/global.css";
import { LocaleParams, Params } from "types";
import { merge } from "utils/clsx";
import AppBar from "./_components/AppBar";
import Provider from "./_providers/Provider";
import { getScopedI18n } from "locales/server";

const LocaleLayout = async ({
  children,
  params: { locale },
}: PropsWithChildren<Params<LocaleParams>>) => {
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
      },
    ],
    knowsLanguage: ["Spanish"],
  };
  return (
    <html lang={locale}>
      <link
        rel="icon"
        href="/favicon-light.png"
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        href="/favicon-dark.png"
        media="(prefers-color-scheme: dark)"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <Provider locale={locale}>
        <body
          className={merge(
            fontPoppins.className,
            "text-slate-200 bg-background"
          )}
        >
          <AppBar />
          <div
            className={merge(
              "overflow-y-auto",
              "h-[calc(100dvh-52px)] sm:h-[calc(100dvh-60px)]"
            )}
          >
            {children}
          </div>
        </body>
      </Provider>
    </html>
  );
};

export default LocaleLayout;
