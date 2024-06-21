import { Chip, Section, Trans, Typography } from "components";
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

const text =
  "Accompanied by expertise in large-scale tools, I have gained experience in the effective use of <span>advanced technologies</span> and <span>robust resources</span>, key to face challenges in <span>complex projects</span>. Some of these tools include:";

const Skill = async ({}: Readonly<SkillProps>) => {
  const t = await getScopedI18n("skill");
  return (
    <Section id="skills" title={t("title")}>
      <div className="grid gap-3">
        <Typography variant="h6" component="h3">
          {t("subtitle.0")}{" "}
          <span className="text-gradient">{t("subtitle.1")}</span>{" "}
          {t("subtitle.2")}{" "}
          <span className="text-gradient">{t("subtitle.3")}</span>
          {t("subtitle.4")}{" "}
          <span className="text-gradient">{t("subtitle.5")}</span>{" "}
          {t("subtitle.6")}{" "}
        </Typography>
        <div className="col-span-4 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Chip key={skill}>{skill}</Chip>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skill;
