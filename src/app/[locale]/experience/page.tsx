import { Divider } from "components/atoms";
import { getScopedI18n, getStaticParams } from "locales/server";
import { setStaticParamsLocale } from "next-international/server";
import { LocaleParams, Params } from "types";
import Home from "./_components/Home";
import Experience from "./_components/Experience";

export function generateStaticParams() {
  return getStaticParams();
}

export const generateMetadata = async () => {
  const t = await getScopedI18n("experience");

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
      <Experience />
    </>
  );
};

export default App;
