import { Chip, Trans, Typography } from "components/atoms";
import type { ExperiencePriority } from "const/experiences";
import { enUS, es } from "date-fns/locale";
import { format } from "date-fns";
import { PropsWithChildren } from "react";
import { LocaleParams } from "types";
import { merge } from "utils/clsx";

export type ExperienceItemProps = PropsWithChildren<{
  skills: readonly string[];
  endDate?: string;
  startDate: string;
  priority: ExperiencePriority;
  role: string;
  summary: string;
  problem: string;
  action: string;
  result: string;
  labels: {
    priority: string;
    problem: string;
    action: string;
    result: string;
  };
  locale: LocaleParams["locale"];
}>;

const priorityStyles: Record<ExperiencePriority, string> = {
  featured:
    "border-white/30 bg-white/10 p-6 shadow-[0_0_40px_rgba(255,255,255,0.08)] md:grid-cols-5 md:p-8",
  supporting: "border-white/15 bg-white/5 p-5 md:grid-cols-5 md:p-6",
  archive: "border-white/10 bg-transparent p-5 md:grid-cols-5",
};

const summaryStyles: Record<ExperiencePriority, string> = {
  featured: "md:col-span-2",
  supporting: "md:col-span-2",
  archive: "md:col-span-2 opacity-90",
};

const caseStudyStyles: Record<ExperiencePriority, string> = {
  featured: "md:col-span-3",
  supporting: "md:col-span-3",
  archive: "md:col-span-3 opacity-90",
};

const ExperienceItem = ({
  skills,
  endDate,
  startDate,
  priority,
  role,
  summary,
  problem,
  action,
  result,
  labels,
  locale: localeKey,
}: Readonly<ExperienceItemProps>) => {
  const locale = localeKey === "es" ? es : enUS;
  const startFormatted = format(startDate, "MMM yyyy", { locale });
  const endFormatted = endDate
    ? ` - ${format(endDate, "MMM yyyy", { locale })}`
    : "";

  const caseStudyItems = [
    { label: labels.problem, copy: problem },
    { label: labels.action, copy: action },
    { label: labels.result, copy: result },
  ];

  return (
    <article
      className={merge(
        "grid grid-cols-1 gap-6 rounded-3xl border",
        priorityStyles[priority],
      )}
    >
      <div className={summaryStyles[priority]}>
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">
            {labels.priority}
          </span>
          <Typography className={merge("mb-0 text-white/80")}>{role}</Typography>
        </div>
        <Typography variant="h6" component="h3">
          <Trans
            text={summary}
            tags={{ span: { className: "text-gradient font-bold" } }}
          />
        </Typography>
        <Typography className={merge("text-nowrap mb-0 text-white")}>
          {startFormatted}{endFormatted}
        </Typography>
        <div className={merge("flex gap-3 flex-wrap h-min mt-5")}>
          {skills.map((skill) => (
            <Chip key={skill}>{skill}</Chip>
          ))}
        </div>
      </div>
      <dl className={merge("grid gap-4", caseStudyStyles[priority])}>
        {caseStudyItems.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/10 bg-black/10 p-4"
          >
            <dt className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              {item.label}
            </dt>
            <dd className="m-0 text-base leading-7 text-white/85">
              <Trans
                text={item.copy}
                tags={{ span: { className: "text-gradient font-bold" } }}
              />
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
};

export default ExperienceItem;
