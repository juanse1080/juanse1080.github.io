import { Chip, OpenInNewIcon, Title, Trans, Typography } from "components";
import { PropsWithChildren } from "react";
import { IntrinsicElementsProps } from "types";
import { merge } from "utils/clsx";

export type ProjectItemProps = PropsWithChildren<{
  id: string;
  title: string;
  description: string;
  skills: string[];
}>;

const ProjectItem = ({
  id,
  title,
  description,
  skills,
  children,
}: Readonly<ProjectItemProps>) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-6 gap-5">
      <div className="col-span-1 2xl:col-start-1 2xl:col-span-3">
        <Title
          variant="h5"
          icon={<OpenInNewIcon width={20} height={20} />}
          component="h3"
          href={`/projects#${id}`}
          className="font-bold text-gradient"
          buttonProps={{
            target: "_blank",
          }}
        >
          {title}
        </Title>
        <Typography variant="body">
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
        href={`/projects#${id}`}
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
