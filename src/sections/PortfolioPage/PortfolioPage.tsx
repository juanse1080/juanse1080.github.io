import { Section } from "components/atoms";
import { Portfolio, Project } from "components/molecules";
import { useRef } from "react";

export interface PortfolioPageProps {
  language: "espanol";
  page: string;
}

const PortfolioPage = ({ language, page }: PortfolioPageProps) => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <>
      <Section
        fullWidth
        id="portfolio"
        title="Portafolio"
        subtitle="Mis trabajos"
        color="white"
      >
        <Portfolio refs={refs} language={language} />
      </Section>
      <Project id="project" refs={refs} page={page} language={language} />
    </>
  );
};

export default PortfolioPage;
