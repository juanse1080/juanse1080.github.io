import { Chip, Trans, Typography } from "components/atoms";
import { PropsWithChildren } from "react";
import { merge } from "utils/clsx";

export type ProjectItemProps = PropsWithChildren<{
  id: string;
  description: string;
  skills: string[];
}>;

const ProjectItem = ({
  id,
  skills,
  children,
  description,
}: Readonly<ProjectItemProps>) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-6 gap-5">
      <div className="col-span-1 2xl:col-start-1 2xl:col-span-3">
        <Typography variant="h6" component="h3">
          <Trans
            text={description}
            tags={{ span: { className: "text-gradient font-bold" } }}
          />
        </Typography>
        <div className={merge("flex gap-3 flex-wrap h-min mt-5")}>
          {skills?.map((skill) => (
            <Chip key={skill}>{skill}</Chip>
          ))}
        </div>
      </div>
      <a
        href={`#${id}`}
        className={merge(
          "col-start-1 md:col-start-2 2xl:col-span-2 2xl:col-start-5",
          "group bg-code rounded-3xl border-divider border border-solid transition-colors hover:border-secondary-100 cursor-pointer overflow-hidden h-min"
        )}
      >
        {children}
      </a>
    </div>
  );
};

export default ProjectItem;
