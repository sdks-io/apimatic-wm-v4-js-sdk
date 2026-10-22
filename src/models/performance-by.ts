import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Aggregation level for metrics. Determines which identifier fields are populated in response.
 *
 * - **CAMPAIGN**: Only `campaignId` populated (`adGroupId`, `creativeId` will be null)
 * - **ADGROUP**: `campaignId` and `adGroupId` populated (`creativeId` will be null)
 * - **CREATIVE**: All IDs populated (`campaignId`, `adGroupId`, `creativeId`)
 *
 * **Default**: `CREATIVE` (when not specified)
 */
export const PerformanceBy = {
  Campaign: "CAMPAIGN",
  Adgroup: "ADGROUP",
  Creative: "CREATIVE",
} as const;
export type PerformanceBy = (typeof PerformanceBy)[keyof typeof PerformanceBy] | (string & {});

export const performanceBySchema: EnumSchema<PerformanceBy> = s.enumOf<PerformanceBy>(PerformanceBy);
