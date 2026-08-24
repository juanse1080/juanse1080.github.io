import { Divider } from "components/atoms";
import { getStaticParams } from "locales/server";
import { getSeoMetadata } from "seo";
import { setStaticParamsLocale } from "next-international/server";
import { LocaleParams, Params } from "types";
import AppBar from "../_components/AppBar";
import Home from "./_components/Home";
import Project from "./_components/Project";

export function generateStaticParams() {
  return getStaticParams();
}

export const generateMetadata = ({ params: { locale } }: Params<LocaleParams>) =>
  getSeoMetadata(locale, "projects");

const App = ({ params: { locale } }: Params<LocaleParams>) => {
  setStaticParamsLocale(locale);

  return (
    <>
      <AppBar path="/projects" />
      <main>
        <Home />
        <Divider />
        <Project />
      </main>
    </>
  );
};

export default App;
