import { Section, Trans, Typography } from "components";
import { getScopedI18n } from "locales/server";
import ExperienceContainer from "./ExperienceContainer";
import ExperienceItem from "./ExperienceItem";

const Experience = async () => {
  const t = await getScopedI18n("experience");

  return (
    <Section id="experience" title={t("title")}>
      <Typography variant="h6" component="h3">
        <Trans
          text={t("subtitle")}
          tags={{ span: { className: "text-gradient" } }}
        />
      </Typography>
      <ExperienceContainer>
        <ExperienceItem
          href="experience#conexalab"
          align="right"
          company="ConexaLab"
          role={t("cloud")}
          startDate="2024-05-01"
        />
        <ExperienceItem
          href="experience#melonn"
          align="right"
          company="Melonn"
          role={t("cloud")}
          startDate="2023-01-01"
          endDate="2024-01-30"
        />
        <ExperienceItem
          href="experience#mayasoft"
          company="Mayasoft"
          role={t("fullstack")}
          startDate="2022-03-01"
          endDate="2022-10-31"
        />
        <ExperienceItem
          href="experience#woombat"
          company="Woombat"
          role={t("frontend")}
          startDate="2021-11-01"
          endDate="2022-03-31"
        />
        <ExperienceItem
          href="experience#bitnovo"
          company="Bitnovo"
          role={t("frontend")}
          startDate="2021-02-01"
          endDate="2021-07-31"
        />
        <ExperienceItem
          href="experience#binary-groups"
          company="Binary groups"
          role={t("frontend")}
          startDate="2021-01-01"
          endDate="2022-11-30"
        />
        <ExperienceItem
          href="experience#ipred"
          company="IPRED"
          role={t("fullstack")}
          startDate="2019-02-01"
          endDate="2020-10-31"
        />
        <ExperienceItem
          href="experience#uis"
          company="UIS"
          role={t("fullstack")}
          startDate="2019-01-01"
          endDate="2019-05-31"
        />
        <ExperienceItem
          href="experience#freelance"
          company="Freelance"
          role={t("fullstack")}
          startDate="2019-01-01"
        />
      </ExperienceContainer>
    </Section>
  );
};

export default Experience;
