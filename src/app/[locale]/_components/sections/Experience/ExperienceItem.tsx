import { Typography } from "components";
import { HTMLElementKeys, IntrinsicElementsProps } from "types";
import { merge } from "utils/clsx";

export type ExperienceItemProps<Element extends HTMLElementKeys> = {
  current?: boolean;
  company: string;
  role: string;
  align?: "left" | "right";
  time?: string;
} & IntrinsicElementsProps<Element>;

const ExperienceItem = <Element extends HTMLElementKeys = "div">({
  component: Component = "div",
  children,
  className,
  current,
  company,
  role,
  time,
  align = "left",
  ...props
}: Readonly<ExperienceItemProps<Element>>) => {
  return (
    <>
      <Component
        className={merge(
          "sm:hidden flex flex-col px-5 py-3 rounded-full bg-code border-border border-solid border-divider",
          className
        )}
        {...(props as any)}
      >
        <Typography
          variant="body"
          className="text-nowrap mb-0 font-bold text-white"
        >
          {company}
        </Typography>

        <Typography variant="caption" className="text-nowrap mb-0">
          {role}
        </Typography>
      </Component>
      <Component
        className={merge(
          "hidden sm:flex flex-col",
          {
            "items-end": align === "right",
            "items-start": align === "left",
          },
          className
        )}
        {...(props as any)}
      >
        <Typography
          variant="body"
          className="text-nowrap mb-0 font-bold text-white"
        >
          {company}
        </Typography>
        <div
          className={merge("block bg-gradient px-3 py-2 w-full", {
            "rounded-l-full": current,
            "rounded-full ": !current,
          })}
        />
        <Typography variant="caption" className="text-nowrap mb-0">
          {role}
        </Typography>
      </Component>
    </>
  );
};

export default ExperienceItem;
