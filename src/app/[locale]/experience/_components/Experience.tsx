import { Section } from "components/molecules";
import { experiences } from "const/experiences";
import { getCurrentLocale, getScopedI18n } from "locales/server";
import ExperienceItem from "./ExperienceItem";

const Experience = async () => {
  const locale = getCurrentLocale();
  const t = await getScopedI18n("experience");
  const tCommon = await getScopedI18n("common");
  const tSection = await getScopedI18n("experience.sections");

  return (
    <>
      {experiences.map((experience) => (
        <Section
          key={experience.id}
          id={experience.id}
          title={experience.company}
          ariaLabel={tCommon("goTo", {
            label: `${t("title")} - ${experience.company}`,
          })}
        >
          <ExperienceItem
            skills={experience.skills}
            endDate={"endDate" in experience ? experience.endDate : undefined}
            startDate={experience.startDate}
            priority={experience.priority}
            role={experience.role}
            summary={tSection(experience.localizedCaseStudy.summaryKey)}
            problem={tSection(experience.localizedCaseStudy.problemKey)}
            action={tSection(experience.localizedCaseStudy.actionKey)}
            result={tSection(experience.localizedCaseStudy.resultKey)}
            labels={{
              priority: t(`labels.${experience.priority}`),
              problem: t("labels.problem"),
              action: t("labels.action"),
              result: t("labels.result"),
            }}
            locale={locale}
          />
        </Section>
      ))}
    </>
  );
};

export default Experience;
