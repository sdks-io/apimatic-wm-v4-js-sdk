import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { criteriaDataSchema, type CriteriaData } from "./criteria-data.js";
import { meetsCriteriaSchema, type MeetsCriteria } from "./meets-criteria.js";
import { recommendationsSchema, type Recommendations } from "./recommendations.js";

export type ProSellerResponse = {
  /** Specifies if the seller has the badge */
  hasBadge?: boolean;
  /** Specifies if the seller is eligible for the badge in the next refresh */
  isEligible?: boolean;
  /** Specifies when the seller received their badge */
  badgedSince?: Date;
  /**
   * Specifies whether the seller is prohibited from participating in the Pro Seller badge program.
   */
  isProhibited?: boolean;
  /**
   * Specifies the seller's badge status in detail. The possible values are "Become a Pro Seller",
   * "You are a Pro Seller", "Pro Seller Badge at risk", "Eligible starting from YYYY-MM-DD", and
   * "Not eligible for the Pro Seller Badge"
   */
  badgeStatus?: string;
  /** Shows whether the seller has met the requirements for the badge. */
  meetsCriteria?: MeetsCriteria;
  /** Shows the criteria for the Pro Seller badge. */
  criteriaData?: CriteriaData;
  /** Recommendations on how to increase chances of Pro Seller Badge eligibility */
  recommendations?: Recommendations;
};

export const proSellerResponseSchema: Schema<ProSellerResponse> = s.object<ProSellerResponse>({
  hasBadge: s.optional(s.boolean()),
  isEligible: s.optional(s.boolean()),
  badgedSince: s.optional(s.dateTime()),
  isProhibited: s.optional(s.boolean()),
  badgeStatus: s.optional(s.string()),
  meetsCriteria: s.optional(s.lazy(() => meetsCriteriaSchema)),
  criteriaData: s.optional(s.lazy(() => criteriaDataSchema)),
  recommendations: s.optional(s.lazy(() => recommendationsSchema)),
});
