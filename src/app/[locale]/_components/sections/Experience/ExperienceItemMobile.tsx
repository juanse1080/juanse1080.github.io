"use client";

import { Typography } from "components/atoms";
import { OpenInNewIcon } from "components/icons";
import { merge } from "utils/clsx";
import { ExperienceItemProps } from "./Experience.const";
import { useMemo } from "react";
import { format } from "date-fns";
import { es, enUS } from "date-fns/locale";
import { useCurrentLocale } from "locales/client";

const ExperienceItemMobile = ({
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
          locale: es,
        })
      );
    return "";
  }, [endDate]);

  return (
    <a
      href={href}
      target="_blank"
      aria-label={ariaLabel}
      className={merge(
        "flex md:hidden items-center px-4 py-3 rounded-3xl bg-code border border-solid border-divider group transition-colors hover:border-secondary-100",
        "text-slate-300 hover:text-white",
        className
      )}
      {...(props as any)}
    >
      <div className="flex flex-col grow">
        <Typography
          variant="body"
          className={merge("text-nowrap mb-0 font-bold")}
        >
          {company}
        </Typography>
        <Typography variant="caption" className={merge("text-nowrap mb-0")}>
          {role}
        </Typography>
        <Typography variant="caption" className={merge("text-nowrap mb-0")}>
          {startFormatted} {endFormatted}
        </Typography>
      </div>
      <OpenInNewIcon
        width={20}
        height={20}
        className="hidden group-hover:inline-block"
      />
    </a>
  );
};

export default ExperienceItemMobile;
