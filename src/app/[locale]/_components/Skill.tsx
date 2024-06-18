import Section from "components/Section";
import Typography from "components/Typography";
import { getScopedI18n } from "locales/server";

const skills = [
  "AWS",
  "Javascript",
  "Typescript",
  "Next JS",
  "React JS",
  "React Native",
  "Angular",
  "Node JS",
  "Nest JS",
  "Jest",
  "Playwright",
  "Git",
  "Github",
  "Gitlab",
  "Docker",
];

export type SkillProps = {};

const Skill = async ({}: Readonly<SkillProps>) => {
  const t = await getScopedI18n("skill");
  return (
    <Section id="skills" title={t("title")}>
      <div className="grid gap-3">
        <div>
          <Typography variant="h6" component="h3">
            {t("subtitle.0")}{" "}
            <span className="text-gradient">{t("subtitle.1")}</span>{" "}
            {t("subtitle.2")}{" "}
            <span className="text-gradient">{t("subtitle.3")}</span>
            {t("subtitle.4")}{" "}
            <span className="text-gradient">{t("subtitle.5")}</span>{" "}
            {t("subtitle.6")}{" "}
          </Typography>
        </div>
        <div className="col-span-4 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-divider border-solid px-3 py-2 shadow-outlined"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skill;
