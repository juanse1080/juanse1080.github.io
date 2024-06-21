import { Divider } from "components";
import { getScopedI18n, getStaticParams } from "locales/server";
import { setStaticParamsLocale } from "next-international/server";
import { LocaleParams, Params } from "types";
import Home from "./_components/Home";
import Project from "./_components/Project";

export function generateStaticParams() {
  return getStaticParams();
}

export const generateMetadata = async () => {
  const t = await getScopedI18n("projects");

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
      <Project />
    </>
  );
};

export default App;
