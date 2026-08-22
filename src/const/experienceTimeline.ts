export type ExperienceTimelineRoleKey =
  | "senior"
  | "software"
  | "cloud"
  | "fullstack"
  | "frontend";

export type CalendarMonth =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12";

export type MonthStartDate = `${number}-${CalendarMonth}-01`;

export type ExperienceTimelineItem = {
  id: string;
  company: string;
  roleKey: ExperienceTimelineRoleKey;
  startDate: MonthStartDate;
  endDate?: MonthStartDate;
  align?: "left" | "right";
  className?: string;
};

export const experienceTimelineStartDate = "2019-01-01";

const getStaticExperienceTimelineEndDate = (date = new Date()): MonthStartDate => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");

  return `${year}-${month}-01` as MonthStartDate;
};

export const experienceTimelineEndDate = getStaticExperienceTimelineEndDate();

export const experienceTimelineItems: readonly ExperienceTimelineItem[] = [
  {
    id: "main-12",
    company: "MAIN 12 LLC",
    roleKey: "senior",
    startDate: "2025-12-01",
  },
  {
    id: "celerik",
    company: "Celerik",
    roleKey: "software",
    startDate: "2024-11-01",
    endDate: "2025-12-01",
  },
  {
    id: "conexalab",
    company: "ConexaLab",
    roleKey: "cloud",
    startDate: "2024-05-01",
  },
  {
    id: "melonn",
    company: "Melonn",
    roleKey: "cloud",
    startDate: "2023-01-01",
    endDate: "2024-01-01",
  },
  {
    id: "mayasoft",
    company: "Mayasoft",
    roleKey: "fullstack",
    startDate: "2022-03-01",
    endDate: "2022-10-01",
  },
  {
    id: "woombat",
    company: "Woombat",
    roleKey: "frontend",
    startDate: "2021-11-01",
    endDate: "2022-03-01",
  },
  {
    id: "bitnovo",
    company: "Bitnovo",
    roleKey: "frontend",
    startDate: "2021-02-01",
    endDate: "2021-07-01",
  },
  {
    id: "binary-groups",
    company: "Binary groups",
    roleKey: "frontend",
    startDate: "2021-01-01",
    endDate: "2022-11-01",
  },
  {
    id: "ipred",
    company: "IPRED",
    roleKey: "fullstack",
    startDate: "2019-02-01",
    endDate: "2020-10-01",
  },
  {
    id: "uis",
    company: "UIS",
    roleKey: "fullstack",
    startDate: "2019-01-01",
    endDate: "2019-05-01",
  },
  {
    id: "freelance",
    company: "Freelance",
    roleKey: "fullstack",
    startDate: "2019-01-01",
  },
];
