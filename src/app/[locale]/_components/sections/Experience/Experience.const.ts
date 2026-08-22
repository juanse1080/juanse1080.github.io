import { ReactNode } from "react";
import {
  experienceTimelineItems,
  experienceTimelineStartDate,
  experienceTimelineEndDate,
} from "const/experienceTimeline";
import { getExperienceDurationModel } from "utils/experienceDuration";
import { LocaleParams } from "types";

export type ExperienceItemProps = {
  id: string;
  company: string;
  role: string;
  href: string;
  ariaLabel: string;
  align?: "left" | "right";
  startDate: string;
  endDate?: string;
  className?: string;
  children?: ReactNode;
  locale: LocaleParams["locale"];
};

export const experienceDurationModel = getExperienceDurationModel({
  items: experienceTimelineItems,
  timelineStartDate: experienceTimelineStartDate,
  timelineEndDate: experienceTimelineEndDate,
});
