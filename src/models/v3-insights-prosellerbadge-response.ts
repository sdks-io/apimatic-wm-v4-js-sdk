import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { criteriaData2Schema, type CriteriaData2 } from "./criteria-data2.js";
import { meetsCriteria2Schema, type MeetsCriteria2 } from "./meets-criteria2.js";
import { recommendations1Schema, type Recommendations1 } from "./recommendations1.js";

export type V3InsightsProsellerbadgeResponse = {
  /**
   * Specifies if the seller has the badge period.<br><b style='color:green;'>Market availability:
   * MX only</b>
   */
  hasBadge?: boolean;
  /**
   * Specifies if the seller is eligible for the badge in the next refresh period.<br><b
   * style='color:green;'>Market availability: MX only</b>
   */
  isEligible?: boolean;
  /**
   * Specifies when the seller received their badge period.<br><b style='color:green;'>Market
   * availability: MX only</b>
   */
  badgedSince?: Date;
  /**
   * Specifies whether the seller is prohibited from participating in the Pro Seller badge
   * program.<br><b style='color:green;'>Market availability: MX only</b>
   */
  isProhibited?: boolean;
  /**
   * Specifies the seller's badge status in detail. The possible values are "Become a Pro Seller",
   * "You are a Pro Seller", "Pro Seller Badge at risk", "Eligible starting from YYYY-MM-DD", and
   * "Not eligible for the Pro Seller Badge"<br><b style='color:green;'>Market availability: MX
   * only</b>
   */
  badgeStatus?: string;
  /**
   * Shows whether the seller has met the requirements for the badge.<br><b
   * style='color:green;'>Market availability: MX only</b>
   */
  meetsCriteria?: MeetsCriteria2;
  /**
   * Shows the criteria for the Pro Seller badge.<br><b style='color:green;'>Market availability: MX
   * only</b>
   */
  criteriaData?: CriteriaData2;
  /**
   * Recommendations on how to increase chances of Pro Seller Badge eligibility<br><b
   * style='color:green;'>Market availability: MX only</b>
   */
  recommendations?: Recommendations1;
};

export const v3InsightsProsellerbadgeResponseSchema: Schema<V3InsightsProsellerbadgeResponse> =
  s.object<V3InsightsProsellerbadgeResponse>({
    hasBadge: s.optional(s.boolean()),
    isEligible: s.optional(s.boolean()),
    badgedSince: s.optional(s.dateTime()),
    isProhibited: s.optional(s.boolean()),
    badgeStatus: s.optional(s.string()),
    meetsCriteria: s.optional(s.lazy(() => meetsCriteria2Schema)),
    criteriaData: s.optional(s.lazy(() => criteriaData2Schema)),
    recommendations: s.optional(s.lazy(() => recommendations1Schema)),
  });
