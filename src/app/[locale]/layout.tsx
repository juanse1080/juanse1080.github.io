import { getI18n, getStaticParams } from "locales/server";
import { setStaticParamsLocale } from "next-international/server";
import { PropsWithChildren } from "react";
import AppBar from "./_components/AppBar";
import Provider from "./_providers/Provider";
import "./global.css";

export type Params = { params: { locale: string } };

export const generateMetadata = async () => {
  const t = await getI18n();

  return {
    title: t("title"),
    description: t("description"),
  };
};

export function generateStaticParams() {
  return getStaticParams();
}

export default function RootLayout({
  children,
  params: { locale },
}: PropsWithChildren<Params>) {
  setStaticParamsLocale(locale);

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
}
