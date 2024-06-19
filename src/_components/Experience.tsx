import { Section, Typography } from "components";
import { getScopedI18n } from "locales/server";
import { HTMLElementKeys, IntrinsicElementsProps } from "types";
import { merge } from "utils/clsx";

export type ExperienceProps = {};

type ItemProps<Element extends HTMLElementKeys> = {
  current?: boolean;
  company: string;
  role: string;
  align?: "left" | "right";
  time?: string;
} & IntrinsicElementsProps<Element>;

const Experience = async ({}: Readonly<ExperienceProps>) => {
  const t = await getScopedI18n("experience");

  return (
    <Section id="experience" title={t("title")}>
      <div>
        <Typography variant="h6" component="h3">
          {t("subtitle.0")}{" "}
          <span className="text-gradient">{t("subtitle.1")}</span>
          {t("subtitle.2")}{" "}
          <span className="text-gradient">{t("subtitle.3")}</span>{" "}
          {t("subtitle.4")}{" "}
          <span className="text-gradient">{t("subtitle.5")}</span>
        </Typography>
      </div>
      <div className="relative grid gap-y-2 grid-cols-1 sm:grid-cols-66 grid-rows-8 z-0 overflow-hidden sm:border-divider sm:border sm:border-solid p-3 rounded-xl my-12 md:my-20 lg:my-24">
        <Grid />
        <Item
          current
          align="right"
          company="ConexaLab"
          role={t("fullstack")}
          className="col-span-1 sm:col-start-65 sm:col-span-2"
        />
        <Item
          align="right"
          company="Melonn"
          role={t("cloud")}
          className="col-span-1 sm:col-start-50 sm:col-span-12"
        />
        <Item
          align="right"
          company="Mayasoft"
          role={t("fullstack")}
          className="col-span-1 sm:col-start-39 sm:col-span-10"
        />
        <Item
          align="right"
          company="Woombat"
          role={t("frontend")}
          className="col-span-1 sm:col-start-34 sm:col-span-5"
        />
        <Item
          company="Bitnovo"
          role={t("frontend")}
          className="col-span-1 sm:col-start-25 sm:col-span-5"
        />
        <Item
          company="Binary groups"
          role={t("frontend")}
          className="col-span-1 sm:col-start-24 sm:col-span-19"
        />
        <Item
          company="IPRED"
          role={t("fullstack")}
          className="col-span-1 sm:col-start-2 sm:col-span-19"
        />
        <Item
          company="UIS"
          role={t("fullstack")}
          className="col-span-1 sm:col-start-1 sm:col-span-4"
        />
        <Item
          current
          company="Freelance"
          role={t("fullstack")}
          className="col-span-1 sm:col-start-1 sm:col-span-66"
        />
      </div>
    </Section>
  );
};

const Item = <Element extends HTMLElementKeys = "div">({
  component: Component = "div",
  children,
  className,
  current,
  company,
  role,
  time,
  align = "left",
  ...props
}: Readonly<ItemProps<Element>>) => {
  return (
    <>
      <Component
        className={merge(
          "sm:hidden flex flex-col px-5 py-3 rounded-full bg-code border-border border-solid border-divider",
          className
        )}
        {...(props as any)}
      >
        <Typography variant="body" className="text-nowrap mb-0 font-bold">
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
        <Typography variant="body" className="text-nowrap mb-0 font-bold">
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

const Grid = () => {
  return (
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
  );
};

export default Experience;
