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
    "border-l-2 border-l-secondary-100/80 border-white/15 bg-white/[0.04] p-5 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.45fr)] md:p-7",
  supporting:
    "border-l border-l-white/25 border-white/10 bg-white/[0.025] p-5 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.5fr)] md:p-6",
  archive:
    "border-l border-l-white/15 border-transparent bg-transparent p-4 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.55fr)]",
};

const summaryStyles: Record<ExperiencePriority, string> = {
  featured: "space-y-4",
  supporting: "space-y-3",
  archive: "space-y-3 opacity-90",
};

const caseStudyStyles: Record<ExperiencePriority, string> = {
  featured: "gap-0",
  supporting: "gap-0",
  archive: "gap-0 opacity-90",
};

const visibleSkillCounts: Record<ExperiencePriority, number> = {
  featured: 10,
  supporting: 7,
  archive: 5,
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
  const visibleSkills = skills.slice(0, visibleSkillCounts[priority]);
  const overflowSkills = skills.slice(visibleSkillCounts[priority]);

  return (
    <article
      className={merge(
        "grid grid-cols-1 gap-5 rounded-2xl border-y border-r",
        priorityStyles[priority],
      )}
    >
      <div className={summaryStyles[priority]}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            {labels.priority}
          </span>
          <Typography className={merge("mb-0 text-white/75")}>{role}</Typography>
        </div>
        <Typography variant="h6" component="h3" className="mb-0">
          <Trans
            text={summary}
            tags={{ span: { className: "text-gradient font-bold" } }}
          />
        </Typography>
        <Typography className={merge("text-nowrap mb-0 text-sm text-white/70")}>
          {startFormatted}{endFormatted}
        </Typography>
        <div className="flex h-min flex-wrap gap-1.5 pt-1">
          {visibleSkills.map((skill) => (
            <Chip
              key={skill}
              className="border-white/10 bg-white/[0.035] px-2 py-1 text-xs leading-none text-white/70"
            >
              {skill}
            </Chip>
          ))}
          {overflowSkills.length > 0 && (
            <span className="text-xs leading-6 text-white/45">
              +{overflowSkills.length} more: {overflowSkills.join(", ")}
            </span>
          )}
        </div>
      </div>
      <dl className={merge("grid", caseStudyStyles[priority])}>
        {caseStudyItems.map((item) => (
          <div
            key={item.label}
            className="grid gap-2 border-t border-white/10 py-4 first:border-t-0 first:pt-0 last:pb-0 md:grid-cols-[7rem_1fr] md:gap-4"
          >
            <dt className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
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
