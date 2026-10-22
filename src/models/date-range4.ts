import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Date range to filter impressions, page views, and sales.<br><b style='color:green;'>Market
 * availability: US only</b>
 */
export const DateRange4 = {
  _7Days: "7DAYS",
  _14Days: "14DAYS",
  _30Days: "30DAYS",
} as const;
export type DateRange4 = (typeof DateRange4)[keyof typeof DateRange4] | (string & {});

export const dateRange4Schema: EnumSchema<DateRange4> = s.enumOf<DateRange4>(DateRange4);
