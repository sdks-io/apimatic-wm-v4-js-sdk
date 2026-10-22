import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A single recommendation option with its projected performance impact. */
export type ImpactOption = {
  /** The recommended value for this option (For example, suggested daily budget amount in USD). */
  value?: number;
  /** Projected change in ad spend (in USD) if this option is applied. */
  adspendChange?: number;
  /** Projected change in number of clicks if this option is applied. */
  clicksChange?: number;
  /** Projected change in number of impressions if this option is applied. */
  impressionsChange?: number;
  /**
   * `true` if this is the primary recommended option. Only one option within a
   * `RecommendedValueImpact` will have `isRecommended: true`.
   */
  isRecommended?: boolean;
};

export const impactOptionSchema: Schema<ImpactOption> = s.object<ImpactOption>({
  value: s.optional(s.float64()),
  adspendChange: s.optional(s.float64()),
  clicksChange: s.optional(s.int()),
  impressionsChange: s.optional(s.int()),
  isRecommended: s.optional(s.boolean()),
});
