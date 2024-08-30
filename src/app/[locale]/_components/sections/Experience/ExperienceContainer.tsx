"use client";

import { differenceInCalendarMonths, endOfMonth } from "date-fns";
import { PropsWithChildren, useMemo } from "react";
import { merge } from "utils/clsx";

const startExperience = new Date("2019-01-01");
const endExperience = endOfMonth(new Date());

const months = differenceInCalendarMonths(endExperience, startExperience);

export type ExperienceContainerProps = PropsWithChildren;

const ExperienceContainer = ({
  children,
}: Readonly<ExperienceContainerProps>) => {
  const totalMonths = useMemo(() => +months.toFixed(0), []);

  return (
    <div className="relative flex flex-col z-0 overflow-hidden sm:border-divider sm:border sm:border-solid rounded-3xl my-12 md:my-20 lg:my-24 p-0 sm:py-4 gap-4">
      <div className="absolute hidden top-0 bottom-0 left-0 right-0 -z-10 sm:flex justify-between">
        <span className=" h-full" />
        {Array(totalMonths)
          .fill("")
          .map((_, idx) => (
            <span
              key={`divider-${startExperience.getTime()}-${idx}`}
              className={merge(
                "border-r border-divider border-solid h-full",
                {}
              )}
            />
          ))}
      </div>
      {children}
    </div>
  );
};

export default ExperienceContainer;
