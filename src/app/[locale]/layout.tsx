import { PropsWithChildren } from "react";
import { fontPoppins } from "theme/fonts";
import "theme/global.css";
import { LocaleParams, Params } from "types";
import AppBar from "./_components/AppBar";
import Provider from "./_providers/Provider";

const LocaleLayout = ({
  children,
  params: { locale },
}: PropsWithChildren<Params<LocaleParams>>) => {
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.ico" />
      </head>
      <body className={fontPoppins.className}>
        <Provider locale={locale}>
          <div className="text-white bg-background">
            <AppBar />
            <div className="min-h-screen h-full overflow-y-auto w-full">
              {children}
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default LocaleLayout;
