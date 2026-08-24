import { Image } from "components/atoms";
import { Section } from "components/molecules";
import { projects } from "const/projects";
import { getScopedI18n } from "locales/server";
import { merge } from "utils/clsx";
import ProjectItem from "./ProjectItem";

const mobileProjects = ["expense_track"];

const Project = async () => {
  const tCommon = await getScopedI18n("common");
  const tSection = await getScopedI18n("home.project");

  const mainProjects = projects.map((project) => ({
    ...project,
    isMobile: mobileProjects.includes(project.id),
  }));

  return (
    <>
      {mainProjects.map(({ isMobile, ...project }, index) => (
        <Section
          key={project.id}
          id={project.id}
          title={project.title}
          ariaLabel={tCommon("goTo", { label: project.title })}
          fillViewport={index === mainProjects.length - 1}
        >
          <ProjectItem
            evidence={{
              problem: tSection(`items.${project.id}.problem`),
              solution: tSection(`items.${project.id}.solution`),
              stack: tSection(`items.${project.id}.stack`),
              result: tSection(`items.${project.id}.result`),
            }}
            labels={{
              problem: tSection("labels.problem"),
              solution: tSection("labels.solution"),
              stack: tSection("labels.stack"),
              result: tSection("labels.result"),
            }}
            {...project}
          >
            <Image
              src={project.img}
              alt={project.title}
              width={project.width}
              height={project.height}
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
