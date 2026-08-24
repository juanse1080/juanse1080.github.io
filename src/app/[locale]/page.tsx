import { Divider } from "components/atoms";
import { getStaticParams } from "locales/server";
import { getSeoMetadata } from "seo";
import { setStaticParamsLocale } from "next-international/server";
import { LocaleParams, Params } from "types";
import AppBar from "./_components/AppBar";
import Home from "./_components/Home";
import About from "./_components/sections/About";
import Education from "./_components/sections/Education";
import Experience from "./_components/sections/Experience";
import Project from "./_components/sections/Project";
import Capability from "./_components/sections/Capability";

export function generateStaticParams() {
  return getStaticParams();
}

export const generateMetadata = ({ params: { locale } }: Params<LocaleParams>) =>
  getSeoMetadata(locale, "home");

const App = ({ params: { locale } }: Params<LocaleParams>) => {
  setStaticParamsLocale(locale);

  return (
    <>
      <AppBar />
      <Home />
      <Divider />
      <About />
      <Experience />
      <Capability />
      <Project />
      <Education />
    </>
  );
};

export default App;
