"use client";

import { Typography } from "components/atoms";
import { ArrowForwardIcon } from "components/icons";
import {
  differenceInCalendarMonths,
  differenceInMonths,
  startOfMonth,
} from "date-fns";
import { ReactNode, useMemo } from "react";
import { merge } from "utils/clsx";

export type ExperienceItemProps = {
  company: string;
  role: string;
  href: string;
  align?: "left" | "right";
  startDate: string;
  endDate?: string;
  className?: string;
  children?: ReactNode;
};

const startExperience = new Date("2019-01-01");
const endExperience = startOfMonth(new Date());
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
  href,
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
      <a
        href={href}
        aria-label={`${company} - ${role}`}
        className={merge(
          "flex sm:hidden items-center px-5 py-3 rounded-full bg-code border-border border-solid border-divider group",
          className
        )}
        {...(props as any)}
      >
        <div className="flex flex-col grow">
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
        <ArrowForwardIcon
          className="hidden group-hover:inline-block"
          height={20}
          width={20}
        />
      </a>
      <div
        className={merge(
          "hidden sm:flex items-center group w-full",
          {
            "rounded-l-full": current,
            "rounded-full ": !current,
          },
          className
        )}
        style={{ marginLeft: rightMonths }}
        {...(props as any)}
      >
        <div className="flex flex-col w-full">
          <Typography
            variant="body"
            className="text-nowrap mb-0 font-bold text-white"
          >
            {company}
          </Typography>
          <a
            href={href}
            aria-label={`${company} - ${role}`}
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
      </div>
    </>
  );
};

export default ExperienceItem;
