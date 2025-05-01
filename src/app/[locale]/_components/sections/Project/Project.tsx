import { Divider, Trans, Typography } from "components/atoms";
import { Section } from "components/molecules";
import { projects } from "const/projects";
import { getScopedI18n } from "locales/server";
import { Fragment } from "react";
import { merge } from "utils/clsx";
import ProjectItem from "./ProjectItem";

const mobileProjects = ["expense_track"];

const Project = async () => {
  const t = await getScopedI18n("project");
  const tCommon = await getScopedI18n("common");

  const mainProjects = projects.map((project) => ({
    ...project,
    isMobile: mobileProjects.includes(project.id),
  }));

  return (
    <Section
      id="projects"
      title={t("title")}
      ariaLabel={tCommon("goTo", { label: t("title").toLowerCase() })}
    >
      <Typography variant="h6" component="h3">
        <Trans
          text={t("subtitle")}
          tags={{ span: { className: "text-gradient font-bold" } }}
        />
      </Typography>
      <div className="mt-10 flex flex-col gap-5">
        {mainProjects.map(({ id, isMobile, ...project }, idx) => (
          <Fragment key={id}>
            <ProjectItem
              href={`projects/#${id}`}
              description={t(`items.${id}.description`)}
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
            {idx + 1 !== mainProjects.length && <Divider />}
          </Fragment>
        ))}
      </div>
    </Section>
  );
};

export default Project;
