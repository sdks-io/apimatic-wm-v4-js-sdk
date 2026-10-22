import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Date range to filter impressions, page views, and sales. */
export const DateRange = {
  _7Days: "7DAYS",
  _14Days: "14DAYS",
  _30Days: "30DAYS",
} as const;
export type DateRange = (typeof DateRange)[keyof typeof DateRange] | (string & {});

export const dateRangeSchema: EnumSchema<DateRange> = s.enumOf<DateRange>(DateRange);
