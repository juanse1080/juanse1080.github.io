import { Typography } from "components/atoms";
import { OpenInNewIcon } from "components/icons";
import { merge } from "utils/clsx";
import { ExperienceItemProps, experienceDurationModel } from "./Experience.const";
import { cssPercent } from "utils/experienceDuration";

const ExperienceItemDesktop = ({
  className,
  company,
  role,
  id,
  endDate,
  href,
  ariaLabel,
}: Readonly<ExperienceItemProps>) => {
  const current = !endDate;
  const duration = experienceDurationModel.items.find((item) => item.id === id);

  if (!duration) {
    throw new Error(`${id}: missing experience duration model item`);
  }

  const width = cssPercent(duration.widthPercent);
  const marginLeft = cssPercent(duration.offsetPercent);

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
      style={{ marginLeft }}
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
            width,
          }}
        />
        <Typography
          variant="caption"
          className="text-nowrap mb-0"
          style={{
            width,
          }}
        >
          {role}
        </Typography>
      </div>
    </a>
  );
};

export default ExperienceItemDesktop;
