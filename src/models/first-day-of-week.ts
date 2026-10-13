import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FirstDayOfWeek = {
  Monday: "Monday",
  Sunday: "Sunday",
} as const;
export type FirstDayOfWeek = (typeof FirstDayOfWeek)[keyof typeof FirstDayOfWeek] | (string & {});

export const firstDayOfWeekSchema: EnumSchema<FirstDayOfWeek> = s.enumOf<FirstDayOfWeek>(FirstDayOfWeek);
