import { Section } from "components/molecules";
import { experiences } from "const/experiences";
import { getScopedI18n } from "locales/server";
import ExperienceItem from "./ExperienceItem";

const Experience = async () => {
  const t = await getScopedI18n("experience");
  const tCommon = await getScopedI18n("common");
  const tSection = await getScopedI18n("experience.sections");

  return (
    <>
      {experiences.map((project) => (
        <Section
          key={project.id}
          id={project.id}
          title={project.company}
          ariaLabel={tCommon("goTo", {
            label: `${t("title")} - ${project.company}`,
          })}
        >
          <ExperienceItem
            skills={project.skills}
            endDate={project.endDate}
            startDate={project.startDate}
            description={tSection(project.id as "celerik")}
          />
        </Section>
      ))}
    </>
  );
};

export default Experience;
