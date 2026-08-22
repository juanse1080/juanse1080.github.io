import { Chip, Trans, Typography } from "components/atoms";
import { enUS, es } from "date-fns/locale";
import { format } from "date-fns";
import { PropsWithChildren } from "react";
import { LocaleParams } from "types";
import { merge } from "utils/clsx";

export type ExperienceItemProps = PropsWithChildren<{
  skills: string[];
  endDate?: string;
  startDate: string;
  description: string;
  locale: LocaleParams["locale"];
}>;

const ExperienceItem = ({
  skills,
  endDate,
  startDate,
  description,
  locale: localeKey,
}: Readonly<ExperienceItemProps>) => {
  const locale = localeKey === "es" ? es : enUS;
  const startFormatted = format(startDate, "MMM yyyy", { locale });
  const endFormatted = endDate
    ? ` - ${format(endDate, "MMM yyyy", { locale })}`
    : "";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-6 gap-5">
      <div className="col-span-1 2xl:col-start-1 2xl:col-span-3">
        <Typography variant="h6" component="h3">
          <Trans
            text={description}
            tags={{ span: { className: "text-gradient font-bold" } }}
          />
        </Typography>
        <Typography className={merge("text-nowrap mb-0 text-white")}>
          {startFormatted} {endFormatted}
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
