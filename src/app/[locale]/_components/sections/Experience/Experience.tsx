import { Trans, Typography } from "components/atoms";
import { Section } from "components/molecules";
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
        <ExperienceItem
          href="experience#main-12"
          ariaLabel={tCommon("goTo", {
            label: `${t("title")} - MAIN 12 LLC`,
          })}
          company="MAIN 12 LLC"
          role={t("senior")}
          startDate="2025-12-01"
          locale={locale}
        />
        <ExperienceItem
          href="experience#celerik"
          ariaLabel={tCommon("goTo", {
            label: `${t("title")} - Celerik`,
          })}
          company="Celerik"
          role={t("software")}
          startDate="2024-11-01"
          endDate="2025-12-01"
          locale={locale}
        />
        <ExperienceItem
          href="experience#conexalab"
          ariaLabel={tCommon("goTo", {
            label: `${t("title")} - ConexaLab`,
          })}
          company="ConexaLab"
          role={t("cloud")}
          startDate="2024-05-01"
          locale={locale}
        />
        <ExperienceItem
          href="experience#melonn"
          ariaLabel={tCommon("goTo", {
            label: `${t("title")} - Melonn`,
          })}
          company="Melonn"
          role={t("cloud")}
          startDate="2023-01-01"
          endDate="2024-01-30"
          locale={locale}
        />
        <ExperienceItem
          href="experience#mayasoft"
          ariaLabel={tCommon("goTo", {
            label: `${t("title")} - Mayasoft`,
          })}
          company="Mayasoft"
          role={t("fullstack")}
          startDate="2022-03-01"
          endDate="2022-10-31"
          locale={locale}
        />
        <ExperienceItem
          href="experience#woombat"
          ariaLabel={tCommon("goTo", {
            label: `${t("title")} - Woombat`,
          })}
          company="Woombat"
          role={t("frontend")}
          startDate="2021-11-01"
          endDate="2022-03-31"
          locale={locale}
        />
        <ExperienceItem
          href="experience#bitnovo"
          ariaLabel={tCommon("goTo", {
            label: `${t("title")} - Bitnovo`,
          })}
          company="Bitnovo"
          role={t("frontend")}
          startDate="2021-02-01"
          endDate="2021-07-31"
          locale={locale}
        />
        <ExperienceItem
          href="experience#binary-groups"
          ariaLabel={tCommon("goTo", {
            label: `${t("title")} - Binary groups`,
          })}
          company="Binary groups"
          role={t("frontend")}
          startDate="2021-01-01"
          endDate="2022-11-30"
          locale={locale}
        />
        <ExperienceItem
          href="experience#ipred"
          ariaLabel={tCommon("goTo", {
            label: `${t("title")} - IPRED`,
          })}
          company="IPRED"
          role={t("fullstack")}
          startDate="2019-02-01"
          endDate="2020-10-31"
          locale={locale}
        />
        <ExperienceItem
          href="experience#uis"
          ariaLabel={tCommon("goTo", {
            label: `${t("title")} - UIS`,
          })}
          company="UIS"
          role={t("fullstack")}
          startDate="2019-01-01"
          endDate="2019-05-31"
          locale={locale}
        />
        <ExperienceItem
          href="experience#freelance"
          ariaLabel={tCommon("goTo", {
            label: `${t("title")} - Freelance`,
          })}
          company="Freelance"
          role={t("fullstack")}
          startDate="2019-01-01"
          locale={locale}
        />
      </ExperienceContainer>
    </Section>
  );
};

export default Experience;
