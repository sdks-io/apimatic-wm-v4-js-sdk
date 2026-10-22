import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { criteriaMetadataSchema, type CriteriaMetadata } from "./criteria-metadata.js";
import { criteriaTierSchema, type CriteriaTier } from "./criteria-tier.js";
import { rewardSchema, type Reward } from "./reward.js";

export type V3InsightsSellerIncentivesResponse = {
  /**
   * Specifies a unique ID assigned to the partner.<br><b style='color:green;'>Market availability:
   * US | CA</b>
   */
  partnerId?: string;
  /**
   * Specifies the current tier of the seller on the Marketplace platform.<br><b
   * style='color:green;'>Market availability: US | CA</b>
   */
  currentTier?: string;
  /**
   * Specifies the next eligible tier for the seller on the Marketplace platform.<br><b
   * style='color:green;'>Market availability: US | CA</b>
   */
  eligibleTier?: string;
  /**
   * Specifies the date when the seller received their badge.<br><b style='color:green;'>Market
   * availability: US | CA</b>
   */
  proSellerBadgeEnrolledDate?: string;
  /**
   * Specifies the metadata value for each criterion<br><b style='color:green;'>Market availability:
   * US only</b>
   */
  criteriaMetadata?: CriteriaMetadata;
  /**
   * Specifies the tier for each criterion.<br><b style='color:green;'>Market availability: US |
   * CA</b>
   */
  criteriaTier?: CriteriaTier;
  /**
   * Indicates if the tier has been overridden.<br><b style='color:green;'>Market availability: US |
   * CA</b>
   */
  isTierOverride?: boolean;
  /** Specifies the overridden tier.<br><b style='color:green;'>Market availability: US | CA</b> */
  tierOverride?: string;
  /**
   * Specifies the reason codes for tier ineligibility.<br><b style='color:green;'>Market
   * availability: US | CA</b>
   */
  reasonCodes?: string[];
  /**
   * Specifies the date of next tier refresh.<br><b style='color:green;'>Market availability: US |
   * CA</b>
   */
  nextRefreshDate?: string;
  /** Specifies the list of rewards.<br><b style='color:green;'>Market availability: US | CA</b> */
  rewards?: Reward[];
};

export const v3InsightsSellerIncentivesResponseSchema: Schema<V3InsightsSellerIncentivesResponse> =
  s.object<V3InsightsSellerIncentivesResponse>({
    partnerId: s.optional(s.string()),
    currentTier: s.optional(s.string()),
    eligibleTier: s.optional(s.string()),
    proSellerBadgeEnrolledDate: s.optional(s.string()),
    criteriaMetadata: s.optional(s.lazy(() => criteriaMetadataSchema)),
    criteriaTier: s.optional(s.lazy(() => criteriaTierSchema)),
    isTierOverride: s.optional(s.boolean()),
    tierOverride: s.optional(s.string()),
    reasonCodes: s.optional(s.array(s.string())),
    nextRefreshDate: s.optional(s.string()),
    rewards: s.optional(s.array(s.lazy(() => rewardSchema))),
  });
