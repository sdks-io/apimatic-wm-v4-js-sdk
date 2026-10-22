import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Field by which the filtering is to be done.
 *
 * **Supported fields**:
 * - `campaignIds`: Filter by specific campaign identifiers
 * - `recommendationType`: Filter by recommendation type (`BUDGET`, `BIDDING_STRATEGY`)
 */
export const Field3 = {
  CampaignIds: "campaignIds",
  RecommendationType: "recommendationType",
} as const;
export type Field3 = (typeof Field3)[keyof typeof Field3] | (string & {});

export const field3Schema: EnumSchema<Field3> = s.enumOf<Field3>(Field3);
