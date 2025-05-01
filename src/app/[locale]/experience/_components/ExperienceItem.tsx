"use client";

import { Chip, Trans, Typography } from "components/atoms";
import { enUS, es } from "date-fns/locale";
import { format } from "date-fns";
import { useCurrentLocale } from "locales/client";
import { PropsWithChildren, useMemo } from "react";
import { merge } from "utils/clsx";

export type ExperienceItemProps = PropsWithChildren<{
  skills: string[];
  endDate?: string;
  startDate: string;
  description: string;
}>;

const ExperienceItem = ({
  skills,
  endDate,
  startDate,
  description,
}: Readonly<ExperienceItemProps>) => {
  const localeKey = useCurrentLocale();

  const locale = useMemo(() => {
    if (localeKey === "es") return es;
    return enUS;
  }, [localeKey]);

  const startFormatted = useMemo(
    () => format(startDate, "MMM yyyy", { locale }),
    [startDate, locale]
  );

  const endFormatted = useMemo(() => {
    if (endDate)
      return (
        " - " +
        format(endDate, "MMM yyyy", {
          locale,
        })
      );
    return "";
  }, [locale]);

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
