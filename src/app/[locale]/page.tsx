import { getI18n, getStaticParams } from "locales/server";
import { setStaticParamsLocale } from "next-international/server";
import { LocaleParams, Params } from "types";
import About from "./_components/About";
import Education from "./_components/Education";
import Experience from "./_components/Experience";
import Home from "./_components/Home";
import Skill from "./_components/Skill";

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
      <hr className="border-divider" />
      <About />
      <Skill />
      <Education />
      <Experience />
    </>
  );
};

export default App;
