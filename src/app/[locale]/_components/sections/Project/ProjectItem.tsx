import { Chip, Title, Trans, Typography } from "components/atoms";
import { OpenInNewIcon } from "components/icons";
import { PropsWithChildren } from "react";
import { merge } from "utils/clsx";

export type ProjectItemProps = PropsWithChildren<{
  href: string;
  title: string;
  skills: string[];
  ariaLabel: string;
  description: string;
}>;

const ProjectItem = ({
  href,
  title,
  skills,
  children,
  ariaLabel,
  description,
}: Readonly<ProjectItemProps>) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-6 gap-5">
      <div className="col-span-1 2xl:col-start-1 2xl:col-span-3">
        <Title
          variant="h5"
          component="h3"
          className="font-bold text-gradient"
          buttonProps={{
            href,
            target: "_blank",
            "aria-label": ariaLabel,
          }}
          icon={<OpenInNewIcon width={20} height={20} />}
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
        href={href}
        target="_black"
        aria-label={ariaLabel}
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
