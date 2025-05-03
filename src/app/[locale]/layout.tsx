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
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.ico" />
      </head>
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
              "overflow-y-auto ",
              "h-[calc(100vh-52px)] sm:h-[calc(100vh-60px)]"
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
