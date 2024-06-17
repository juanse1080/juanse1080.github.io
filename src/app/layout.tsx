import type { Metadata } from "next";
import Provider from "./_providers/Provider";
import "./global.css";
import AppBar from "./_components/AppBar";

export const metadata: Metadata = {
  title: "Juan Marcon | Desarrollador de software",
  description: "El portafolio de Juan Marcon, desarrollador de software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />
      </head>
      <Provider>
        <body>
          <div
            id="root"
            className="h-min-screen h-max-screen text-white bg-background overflow-y-hidden"
          >
            <AppBar />
            <div className="container h-full p-3">{children}</div>
          </div>
        </body>
      </Provider>
    </html>
  );
}
