import { PropsWithChildren } from "react";
import { fontPoppins } from "theme/fonts";
import "theme/global.css";
import { LocaleParams, Params } from "types";
import { merge } from "utils/clsx";
import { getPersonJsonLd } from "seo";

const LocaleLayout = async ({
  children,
  params: { locale },
}: PropsWithChildren<Params<LocaleParams>>) => {
  const data = getPersonJsonLd(locale);
  return (
    <html lang={locale}>
      <head>
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
      </head>
      <body
          className={merge(
            fontPoppins.className,
            "text-slate-200 bg-background",
            "min-h-screen"
          )}
        >
          {children}
      </body>
    </html>
  );
};

export default LocaleLayout;
