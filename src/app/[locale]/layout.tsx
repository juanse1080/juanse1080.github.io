import { PropsWithChildren } from "react";
import { fontPoppins } from "theme/fonts";
import "theme/global.css";
import { LocaleParams, Params } from "types";
import AppBar from "./_components/AppBar";
import Provider from "./_providers/Provider";
import { merge } from "utils/clsx";

const LocaleLayout = ({
  children,
  params: { locale },
}: PropsWithChildren<Params<LocaleParams>>) => {
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
