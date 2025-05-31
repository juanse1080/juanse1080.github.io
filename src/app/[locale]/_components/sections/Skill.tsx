import { Chip, Trans, Typography } from "components/atoms";
import { Section } from "components/molecules";
import { getScopedI18n } from "locales/server";

const skills = [
  "AWS",
  "Typescript",
  "Next JS",
  "React JS",
  "React Native",
  "Angular",
  "Node JS",
  "Nest JS",
  "Jest",
  "Python",
  "FastAPI",
  "Playwright",
  "Docker",
];

const Skill = async () => {
  const t = await getScopedI18n("home.skill");
  const tCommon = await getScopedI18n("common");

  return (
    <Section
      id="skills"
      title={t("title")}
      ariaLabel={tCommon("goTo", { label: t("title").toLowerCase() })}
    >
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
