export type ExperienceDurationItem = {
  id: string;
  startDate: string;
  endDate?: string;
};

export type ExperienceDurationModelItem<T extends ExperienceDurationItem> = T & {
  durationMonths: number;
  offsetMonths: number;
  widthPercent: number;
  offsetPercent: number;
};

export type ExperienceDurationModel<T extends ExperienceDurationItem> = {
  totalMonths: number;
  dividerCount: number;
  items: ExperienceDurationModelItem<T>[];
};

const monthDatePattern = /^(?<year>\d{4})-(?<month>\d{2})-01$/;

const toYearMonthIndex = (date: string) => {
  const match = date.match(monthDatePattern);

  if (!match?.groups) {
    throw new Error(`${date}: expected an explicit month-start date in YYYY-MM-01 format`);
  }

  const year = Number(match.groups.year);
  const month = Number(match.groups.month);

  if (month < 1 || month > 12) {
    throw new Error(`${date}: month must be between 01 and 12`);
  }

  return year * 12 + (month - 1);
};

export const monthsBetween = (startDate: string, endDate: string) => {
  const months = toYearMonthIndex(endDate) - toYearMonthIndex(startDate);

  if (months < 0) {
    throw new Error(`${endDate}: end date must not be before start date ${startDate}`);
  }

  return months;
};

export const percentForMonths = (months: number, totalMonths: number) => {
  if (totalMonths <= 0) {
    throw new Error("Experience timeline must span at least one month");
  }

  return (months / totalMonths) * 100;
};

export const getExperienceDurationModel = <T extends ExperienceDurationItem>({
  items,
  timelineStartDate,
  timelineEndDate,
}: {
  items: readonly T[];
  timelineStartDate: string;
  timelineEndDate: string;
}): ExperienceDurationModel<T> => {
  const totalMonths = monthsBetween(timelineStartDate, timelineEndDate);

  return {
    totalMonths,
    dividerCount: Math.max(totalMonths - 2, 0),
    items: items.map((item) => {
      const durationMonths = monthsBetween(
        item.startDate,
        item.endDate ?? timelineEndDate,
      );
      const offsetMonths = monthsBetween(timelineStartDate, item.startDate);

      return {
        ...item,
        durationMonths,
        offsetMonths,
        widthPercent: percentForMonths(durationMonths, totalMonths),
        offsetPercent: percentForMonths(offsetMonths, totalMonths),
      };
    }),
  };
};

export const cssPercent = (value: number) => `${value}%`;
