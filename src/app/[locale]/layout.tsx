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
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Provider locale={locale}>
          <div className="min-h-screen h-screen overflow-y-auto text-white bg-background">
            <AppBar />
            <div className="container px-3 h-full">{children}</div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
