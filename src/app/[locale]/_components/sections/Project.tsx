import { Chip, Divider, Section, Typography, Trans } from "components";
import { getScopedI18n } from "locales/server";
import { merge } from "utils/clsx";

export type ProjectProps = {};

const projects = [
  {
    title: "Deeptools",
    description:
      "Este proyecto está dirigido a desarrolladores de <span>modelos de IA</span> sin conocimientos sobre el despliegue adecuado de algoritmos. El software fue diseñado para ayudar a muchos miembros del grupo <span>Bivl2ab</span> que carecen de esta experiencia.",
    skills: [
      "Javascript",
      "React JS",
      "Material UI",
      "Python",
      "Django",
      "Celery",
      "gRPC",
      "Docker",
      "MySQL",
    ],
    img: "/img/projects/deeptools/algorithms.png",
    endDate: new Date(),
    startDate: new Date(),
  },
];

const Project = async ({}: Readonly<ProjectProps>) => {
  const t = await getScopedI18n("project");

  return (
    <Section id="projects" title={t("title")}>
      <Typography variant="h6" component="h3">
        <Trans
          text={t("subtitle")}
          tags={{ span: { className: "text-gradient font-bold" } }}
        />
      </Typography>
      <div className="mt-12">
        {projects.map((project) => (
          <Item key={project.title} {...project}></Item>
        ))}
      </div>
    </Section>
  );
};

const Item = ({ title, description, skills, img }: any) => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 2xl:grid-cols-6 gap-5">
      <div className="col-span-1 2xl:col-start-1 2xl:col-span-3">
        <Typography
          className="font-bold text-gradient"
          variant="h5"
          component="h3"
        >
          {title}
        </Typography>
        <Typography variant="body">
          <Trans
            text={description}
            tags={{ span: { className: "text-gradient font-bold" } }}
          />
        </Typography>
      </div>
      <div
        className={merge(
          "col-span-2 lg:col-span-1 lg:col-start-1 2xl:col-span-3 2xl:col-start-1",
          "flex gap-3 flex-wrap h-min"
        )}
      >
        {skills?.map((skill: any) => (
          <Chip key={skill}>{skill}</Chip>
        ))}
      </div>
      <div
        className={merge(
          "col-start-1 md:col-start-2 md:row-start-1 lg:row-span-2 lg:row-start-1 2xl:col-span-2 2xl:col-start-5",
          "group bg-code rounded-3xl border-divider border border-solid transition-colors hover:border-secondary-100 cursor-pointer overflow-hidden h-min"
        )}
      >
        <img
          src={img}
          alt={title}
          width="100%"
          className={merge(
            "rounded-2xl transition-all",
            "-translate-x-10 translate-y-10 group-hover:-translate-x-5 group-hover:translate-y-5"
          )}
        />
      </div>
      <Divider className="col-span-2" />
    </div>
  );
};

export default Project;
