"use client";

import { Typography } from "components";
import {
  differenceInCalendarMonths,
  differenceInMonths,
  endOfMonth,
} from "date-fns";
import { ReactNode, useMemo } from "react";
import { merge } from "utils/clsx";

export type ExperienceItemProps = {
  company: string;
  role: string;
  align?: "left" | "right";
  startDate: string;
  endDate?: string;
  className?: string;
  children?: ReactNode;
};

const startExperience = new Date("2019-01-01");
const endExperience = endOfMonth(new Date());

const totalMonths = differenceInMonths(endExperience, startExperience);
const percentagePerMonth = 100 / totalMonths;

const monthWidth = (numberOfMonths: number) =>
  `calc(${numberOfMonths * percentagePerMonth}%)`;

const ExperienceItem = ({
  children,
  className,
  company,
  role,
  startDate,
  endDate,
  align = "left",
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
    <>
      <div
        className={merge(
          "sm:hidden flex flex-col px-5 py-3 rounded-full bg-code border-border border-solid border-divider",
          className
        )}
        {...(props as any)}
      >
        <Typography
          variant="body"
          className={merge("text-nowrap mb-0 font-bold text-white")}
        >
          {company}
        </Typography>

        <Typography variant="caption" className={merge("text-nowrap mb-0")}>
          {role}
        </Typography>
      </div>
      <div
        className={merge("hidden sm:flex flex-col", className)}
        style={{ transform: `translateX(${rightMonths})` }}
        {...(props as any)}
      >
        <Typography
          align={align}
          variant="body"
          className="text-nowrap mb-0 font-bold text-white"
          style={{
            width: months,
          }}
        >
          {company}
        </Typography>
        <div
          className={merge("block bg-gradient px-3 py-2 w-full", {
            "rounded-l-full": current,
            "rounded-full ": !current,
          })}
          style={{
            width: months,
          }}
        />
        <Typography
          align={align}
          variant="caption"
          className="text-nowrap mb-0"
          style={{
            width: months,
          }}
        >
          {role}
        </Typography>
      </div>
    </>
  );
};

export default ExperienceItem;
