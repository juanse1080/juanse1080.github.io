import { differenceInMonths, startOfMonth } from "date-fns";
import { ReactNode } from "react";
import { LocaleParams } from "types";

export type ExperienceItemProps = {
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

export const startExperience = new Date("2019-01-01");
export const endExperience = startOfMonth(new Date());
export const totalMonths = differenceInMonths(endExperience, startExperience);

export const percentagePerMonth = 100 / totalMonths;

export const monthWidth = (numberOfMonths: number) =>
  `calc(${numberOfMonths * percentagePerMonth}%)`;
