import { Chip, Trans, Typography } from "components/atoms";
import { PropsWithChildren } from "react";
import { merge } from "utils/clsx";

export type ExperienceItemProps = PropsWithChildren<{
  description: string;
  skills: string[];
}>;

const ExperienceItem = ({
  skills,
  description,
}: Readonly<ExperienceItemProps>) => {
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
    </div>
  );
};

export default ExperienceItem;
