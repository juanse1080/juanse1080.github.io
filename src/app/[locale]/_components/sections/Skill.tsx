import { Chip, Section, Typography, Trans } from "components";
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
        <Typography variant="h6" component="h3">
          <Trans
            text={t("subtitle")}
            tags={{ span: { className: "text-gradient" } }}
          />
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
