"use client";

import { ReactNode } from "react";
import ExperienceItemDesktop from "./ExperienceItemDesktop";
import ExperienceItemMobile from "./ExperienceItemMobile";

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
};

const ExperienceItem = ({ ...props }: Readonly<ExperienceItemProps>) => {
  return (
    <>
      <ExperienceItemMobile {...props} />
      <ExperienceItemDesktop {...props} />
    </>
  );
};

export default ExperienceItem;
