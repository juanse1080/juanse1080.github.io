import type { Metadata } from "next";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "Juan Marcon",
  description:
    "Aquí encontraras parte de mi desarrollo profesional, como educación, experiencia, cursos, contacto, algunos de los proyectos que he sido parte y tecnologías que manejo.",
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
          <div id="root">{children}</div>
        </body>
      </Provider>
    </html>
  );
}
