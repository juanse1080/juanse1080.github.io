import { Section } from "components";
import { getScopedI18n } from "locales/server";

export type ProjectProps = {};

const Project = async ({}: Readonly<ProjectProps>) => {
  const t = await getScopedI18n("about");

  return <Section id="projects" title={t("title")}></Section>;
};

export default Project;
