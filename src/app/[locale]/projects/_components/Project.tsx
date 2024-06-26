import { Section } from "components";
import { projects } from "const/projects";
import { getScopedI18n } from "locales/server";
import { merge } from "utils/clsx";
import ProjectItem from "./ProjectItem";

export type ProjectProps = {};

const mobileProjects = ["expense_track"];

const Project = async ({}: Readonly<ProjectProps>) => {
  const tSection = await getScopedI18n("project");

  const mainProjects = projects.map((project) => ({
    ...project,
    isMobile: mobileProjects.includes(project.id),
  }));

  return (
    <>
      {mainProjects.map(({ isMobile, ...project }) => (
        <Section key={project.id} id={project.id} title={project.title}>
          <ProjectItem
            description={tSection(`items.${project.id}.description`)}
            {...project}
          >
            <img
              src={project.img}
              alt={project.title}
              className={merge(
                "rounded-2xl transition-all max-h-60 max-w-[100%]",
                "-translate-x-10 translate-y-10 group-hover:-translate-x-5 group-hover:translate-y-5",
                {
                  "mx-auto !translate-x-0 translate-y-28 scale-150 group-hover:translate-y-20":
                    isMobile,
                }
              )}
            />
          </ProjectItem>
        </Section>
      ))}
    </>
  );
};

export default Project;
