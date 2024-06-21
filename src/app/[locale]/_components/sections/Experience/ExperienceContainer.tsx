import { PropsWithChildren } from "react";
import { merge } from "utils/clsx";

const ExperienceContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative grid gap-y-2 grid-cols-1 sm:grid-cols-66 grid-rows-8 z-0 overflow-hidden sm:border-divider sm:border sm:border-solid p-0 sm:p-4 rounded-3xl my-12 md:my-20 lg:my-24">
      <div className="absolute hidden sm:grid top-0 bottom-0 left-0 right-0 grid-cols-22 -z-10">
        {Array(22)
          .fill("")
          .map((_, idx) => (
            <span
              key={idx}
              className={merge("border-r border-divider border-solid", {
                "border-x": idx === 0,
              })}
            />
          ))}
      </div>
      {children}
    </div>
  );
};

export default ExperienceContainer;
