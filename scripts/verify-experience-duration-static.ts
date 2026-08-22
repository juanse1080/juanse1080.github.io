import {
  experienceTimelineItems,
  experienceTimelineStartDate,
} from "../src/const/experienceTimeline";
import { getExperienceDurationModel } from "../src/utils/experienceDuration";

const fail = (message: string): never => {
  throw new Error(message);
};

const datePattern = /^\d{4}-\d{2}-01$/;

for (const item of experienceTimelineItems) {
  if (!datePattern.test(item.startDate)) {
    fail(`${item.id}: startDate must be an explicit month-start ISO date`);
  }

  if (item.endDate && !datePattern.test(item.endDate)) {
    fail(`${item.id}: endDate must be an explicit month-start ISO date`);
  }
}

const model = getExperienceDurationModel({
  items: experienceTimelineItems,
  timelineStartDate: experienceTimelineStartDate,
  timelineEndDate: "2026-08-01",
});

if (model.totalMonths !== 91) {
  fail(`expected 91 total months from Jan 2019 through Aug 2026, got ${model.totalMonths}`);
}

const byId = Object.fromEntries(model.items.map((item) => [item.id, item]));

if (byId["main-12"]?.durationMonths !== 8) {
  fail("main-12: current role should span 8 months in the fixed Aug 2026 model");
}

if (byId.celerik?.offsetMonths !== 70 || byId.celerik.durationMonths !== 13) {
  fail("celerik: expected offset 70 months and duration 13 months");
}

if (byId.freelance?.offsetMonths !== 0 || byId.freelance.durationMonths !== 91) {
  fail("freelance: expected to cover the full static timeline range");
}

console.log("Experience duration static verification passed.");
