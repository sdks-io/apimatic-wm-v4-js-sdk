import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the date granularity for aggregating report data. Required when using
 * `reportType=ITEM_PERFORMANCE` and `reportVersion=v3`. Valid values are `DAILY`, `WEEKLY`,
 * `MONTHLY`, or `QUARTERLY`. Ignored for all other report types and versions.
 *
 * <strong style="color: green;">Market availability: Global</strong>
 */
export const DateGranularity = {
  Daily: "DAILY",
  Weekly: "WEEKLY",
  Monthly: "MONTHLY",
  Quarterly: "QUARTERLY",
} as const;
export type DateGranularity = (typeof DateGranularity)[keyof typeof DateGranularity] | (string & {});

export const dateGranularitySchema: EnumSchema<DateGranularity> = s.enumOf<DateGranularity>(DateGranularity);
