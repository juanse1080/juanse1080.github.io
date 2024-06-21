import { Section, Typography } from "components";
import { getScopedI18n } from "locales/server";
import { merge } from "utils/clsx";
import ExperienceItem from "./ExperienceItem";
import ExperienceContainer from "./ExperienceContainer";

export type ExperienceProps = {};

const Experience = async ({}: Readonly<ExperienceProps>) => {
  const t = await getScopedI18n("experience");

  return (
    <Section id="experience" title={t("title")}>
      <Typography variant="h6" component="h3">
        {t("subtitle.0")}{" "}
        <span className="text-gradient">{t("subtitle.1")}</span>
        {t("subtitle.2")}{" "}
        <span className="text-gradient">{t("subtitle.3")}</span>{" "}
        {t("subtitle.4")}{" "}
        <span className="text-gradient">{t("subtitle.5")}</span>
      </Typography>
      <ExperienceContainer>
        <ExperienceItem
          current
          align="right"
          company="ConexaLab"
          role={t("fullstack")}
          className="col-span-1 sm:col-start-65 sm:col-span-2"
        />
        <ExperienceItem
          align="right"
          company="Melonn"
          role={t("cloud")}
          className="col-span-1 sm:col-start-50 sm:col-span-12"
        />
        <ExperienceItem
          align="right"
          company="Mayasoft"
          role={t("fullstack")}
          className="col-span-1 sm:col-start-39 sm:col-span-10"
        />
        <ExperienceItem
          align="right"
          company="Woombat"
          role={t("frontend")}
          className="col-span-1 sm:col-start-34 sm:col-span-5"
        />
        <ExperienceItem
          company="Bitnovo"
          role={t("frontend")}
          className="col-span-1 sm:col-start-25 sm:col-span-5"
        />
        <ExperienceItem
          company="Binary groups"
          role={t("frontend")}
          className="col-span-1 sm:col-start-24 sm:col-span-19"
        />
        <ExperienceItem
          company="IPRED"
          role={t("fullstack")}
          className="col-span-1 sm:col-start-2 sm:col-span-19"
        />
        <ExperienceItem
          company="UIS"
          role={t("fullstack")}
          className="col-span-1 sm:col-start-1 sm:col-span-4"
        />
        <ExperienceItem
          current
          company="Freelance"
          role={t("fullstack")}
          className="col-span-1 sm:col-start-1 sm:col-span-66"
        />
      </ExperienceContainer>
    </Section>
  );
};

export default Experience;
