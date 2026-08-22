import { Trans, Typography } from "components/atoms";
import { Section } from "components/molecules";
import { experienceTimelineItems } from "const/experienceTimeline";
import { getCurrentLocale, getScopedI18n } from "locales/server";
import ExperienceContainer from "./ExperienceContainer";
import ExperienceItem from "./ExperienceItem";

const Experience = async () => {
  const locale = getCurrentLocale();
  const t = await getScopedI18n("home.experience");
  const tCommon = await getScopedI18n("common");

  return (
    <Section
      id="experience"
      title={t("title")}
      ariaLabel={tCommon("goTo", { label: t("title") })}
    >
      <Typography variant="h6" component="h3">
        <Trans
          text={t("subtitle")}
          tags={{ span: { className: "text-gradient" } }}
        />
      </Typography>
      <ExperienceContainer>
        {experienceTimelineItems.map((item) => (
          <ExperienceItem
            key={item.id}
            id={item.id}
            href={`experience#${item.id}`}
            ariaLabel={tCommon("goTo", {
              label: `${t("title")} - ${item.company}`,
            })}
            company={item.company}
            role={t(item.roleKey)}
            startDate={item.startDate}
            endDate={item.endDate}
            align={item.align}
            className={item.className}
            locale={locale}
          />
        ))}
      </ExperienceContainer>
    </Section>
  );
};

export default Experience;
