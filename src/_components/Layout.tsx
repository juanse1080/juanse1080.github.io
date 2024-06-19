import Provider from "_components/Provider";
import { PropsWithChildren } from "react";
import "theme/global.css";
import { LocaleParams } from "types";
import AppBar from "./AppBar";

const Layout = ({ children, locale }: PropsWithChildren<LocaleParams>) => {
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
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

export default Layout;
