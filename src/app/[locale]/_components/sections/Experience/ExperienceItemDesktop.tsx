"use client";

import { Typography } from "components/atoms";
import { OpenInNewIcon } from "components/icons";
import { differenceInCalendarMonths } from "date-fns";
import { useMemo } from "react";
import { merge } from "utils/clsx";
import {
  endExperience,
  monthWidth,
  startExperience,
  ExperienceItemProps,
} from "./Experience.const";

const ExperienceItemDesktop = ({
  children,
  className,
  company,
  role,
  startDate,
  endDate,
  align = "left",
  href,
  ariaLabel,
  ...props
}: Readonly<ExperienceItemProps>) => {
  const current = useMemo(() => !endDate, [endDate]);

  const months = useMemo(
    () =>
      monthWidth(
        differenceInCalendarMonths(endDate ?? endExperience, startDate)
      ),
    [startDate, endDate]
  );

  const rightMonths = useMemo(
    () => monthWidth(differenceInCalendarMonths(startDate, startExperience)),
    [startDate]
  );

  return (
    <a
      href={href}
      target="_blank"
      aria-label={ariaLabel}
      className={merge(
        "hidden md:flex items-center group w-full",
        "transition-all duration-300 hover:translate-x-1",
        "text-slate-300 hover:text-white",
        {
          "rounded-l-full": current,
          "rounded-full ": !current,
        },
        className
      )}
      style={{ marginLeft: rightMonths }}
      {...(props as any)}
    >
      <div className="flex flex-col gap-0.5 w-full">
        <Typography
          variant="body"
          className="text-nowrap mb-0 font-bold w-min flex items-center gap-1"
        >
          {company}
          <OpenInNewIcon
            width={16}
            height={16}
            className="hidden group-hover:inline-block"
          />
        </Typography>
        <span
          className={merge("block bg-gradient px-3 py-2 w-full", {
            "rounded-l-full": current,
            "rounded-full ": !current,
          })}
          style={{
            width: months,
          }}
        />
        <Typography
          variant="caption"
          className="text-nowrap mb-0"
          style={{
            width: months,
          }}
        >
          {role}
        </Typography>
      </div>
    </a>
  );
};

export default ExperienceItemDesktop;
