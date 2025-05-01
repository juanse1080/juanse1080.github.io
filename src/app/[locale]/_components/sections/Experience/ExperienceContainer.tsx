"use client";

import { differenceInCalendarMonths, endOfMonth } from "date-fns";
import { PropsWithChildren } from "react";
import { merge } from "utils/clsx";

const startExperience = new Date("2019-01-01");
const endExperience = endOfMonth(new Date());

const months = differenceInCalendarMonths(endExperience, startExperience);
const spaces = months - 2;

export type ExperienceContainerProps = PropsWithChildren;

const ExperienceContainer = ({
  children,
}: Readonly<ExperienceContainerProps>) => {
  return (
    <div className="relative flex flex-col z-0 overflow-auto md:overflow-hidden md:border-divider md:border md:border-solid rounded-3xl my-12 md:my-20 lg:my-24 p-0 md:py-4 gap-4">
      <div className="absolute hidden top-0 bottom-0 left-0 right-0 -z-10 md:flex justify-between">
        <span className="h-full" />
        {Array(spaces)
          .fill("")
          .map((_, idx) => {
            return (
              <span
                key={`divider-${startExperience.getTime()}-${idx}`}
                className={merge(
                  "border-r border-divider border-solid h-full",
                  {}
                )}
              />
            );
          })}
        <span className="h-full" />
      </div>
      {children}
    </div>
  );
};

export default ExperienceContainer;
