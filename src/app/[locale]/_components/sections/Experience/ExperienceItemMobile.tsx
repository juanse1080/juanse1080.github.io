import { Typography } from "components/atoms";
import { OpenInNewIcon } from "components/icons";
import { merge } from "utils/clsx";
import { ExperienceItemProps } from "./Experience.const";
import { format } from "date-fns";
import { es, enUS } from "date-fns/locale";

const ExperienceItemMobile = ({
  className,
  company,
  role,
  startDate,
  endDate,
  href,
  ariaLabel,
  locale: localeKey,
}: Readonly<ExperienceItemProps>) => {
  const locale = localeKey === "es" ? es : enUS;
  const startFormatted = format(startDate, "MMM yyyy", { locale });
  const endFormatted = endDate
    ? ` - ${format(endDate, "MMM yyyy", { locale })}`
    : "";

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
