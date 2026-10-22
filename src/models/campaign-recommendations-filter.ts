import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { field3Schema, type Field3 } from "./field3.js";

/**
 * Filter configuration to narrow down campaign recommendation results.
 *
 * **Validation Rules**:
 * - Both `field` and `values` are required when a filter is provided
 * - Each filter field must be specified only once (no duplicate fields)
 * - Filter values must contain at least one value
 * - Multiple values within a filter act as an OR condition
 * - Multiple filters are combined using the AND operator.
 */
export type CampaignRecommendationsFilter = {
  /**
   * Field by which the filtering is to be done.
   *
   * **Supported fields**:
   * - `campaignIds`: Filter by specific campaign identifiers
   * - `recommendationType`: Filter by recommendation type (`BUDGET`, `BIDDING_STRATEGY`)
   */
  field: Field3;
  /**
   * List of values for the specified field. Multiple values act as an OR condition within the
   * filter.
   *
   * **Valid values by field**:
   * - `campaignIds`: Numeric string campaign IDs
   * - `recommendationType`: `BUDGET`, `BIDDING_STRATEGY`
   */
  values: string[];
};

export const campaignRecommendationsFilterSchema: Schema<CampaignRecommendationsFilter> =
  s.object<CampaignRecommendationsFilter>({
    field: field3Schema,
    values: s.array(s.string()),
  });
