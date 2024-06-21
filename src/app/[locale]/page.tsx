import { getI18n, getStaticParams } from "locales/server";
import { setStaticParamsLocale } from "next-international/server";
import { LocaleParams, Params } from "types";
import About from "./_components/sections/About";
import Education from "./_components/sections/Education";
import Experience from "./_components/sections/Experience";
import Home from "./_components/Home";
import Skill from "./_components/sections/Skill";
import Project from "./_components/sections/Project";
import { Divider } from "components";

export function generateStaticParams() {
  return getStaticParams();
}

export const generateMetadata = async () => {
  const t = await getI18n();

  return {
    title: t("title"),
    description: t("description"),
  };
};

const App = ({ params: { locale } }: Params<LocaleParams>) => {
  setStaticParamsLocale(locale);

  return (
    <>
      <Home />
      <Divider />
      <About />
      <Skill />
      <Education />
      <Experience />
      <Project />
    </>
  );
};

export default App;
