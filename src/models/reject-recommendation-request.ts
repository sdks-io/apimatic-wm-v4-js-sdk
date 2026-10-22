import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  recommendationRequestFilterSchema,
  type RecommendationRequestFilter,
} from "./recommendation-request-filter.js";
import { rejectionCodesSchema, type RejectionCodes } from "./rejection-codes.js";

export type RejectRecommendationRequest = {
  /**
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | ITEM | To reject list of recommended items | string |
   *
   * <br><b style='color:green;'>Market availability: US | CA | MX</span></b>
   *
   * @default "ITEM"
   */
  recommendationType?: "ITEM";
  /** Different type of filters can be passed in this object. */
  filterCriteria?: RecommendationRequestFilter;
  /**
   * List of item recommendation unique ids to reject. The size of the list should not exceed 100.
   * You cannot add filter criteria along with the itemRecommendationUniqueIds list
   */
  itemRecommendationUniqueIds?: string[];
  /**
   * List of rejection codes
   *
   * | Attribute | Description | Data Type |
   * | --- | ----------- | ------- |
   * | NOT_SELLING_THESE_ITEMS<br><b style='color:green;'>Market availability: US | CA | MX</span></b> | As a seller, I don’t intend to sell these items on Walmart  | string |
   * | NOT_SELLING_THESE_BRANDS<br><b style='color:green;'>Market availability: US | CA | MX</span></b> | As a seller, I don’t intend to sell these brands on Walmart  | string |
   * | NOT_SELLING_THESE_CATEGORIES<br><b style='color:green;'>Market availability: US only</span></b> | As a seller, I don’t intend to sell these categories on Walmart  | string |
   * | LIMITED_TO_OTHER_MARKETPLACE <br><b style='color:green;'>Market availability: US | CA | MX</span></b>| As a seller, I intend to sell the rejected items only on other marketplaces  | string |
   * | ALREADY_SELLING_ON_WALMART <br><b style='color:green;'>Market availability: US | CA | MX</span></b>| I am already selling these items on Walmart  | string |
   * | OTHER_REASON <br><b style='color:green;'>Market availability: US | CA | MX</span></b>| Other reason for rejecting the items. customRejectionMessage is mandatory to pass if rejectionCode is OTHER_REASON.  | string |
   */
  rejectionCodes: RejectionCodes;
  /**
   * Custom rejection message if the rejection code is OTHER_REASON. This is required only when the
   * rejectionCodes has OTHER_REASON in the list. Maximum length of the message is 500
   */
  customRejectionMessage?: string;
};

export const rejectRecommendationRequestSchema: Schema<RejectRecommendationRequest> =
  s.object<RejectRecommendationRequest>({
    recommendationType: s.defaulted(s.literal("ITEM"), "ITEM"),
    filterCriteria: s.optional(s.lazy(() => recommendationRequestFilterSchema)),
    itemRecommendationUniqueIds: s.optional(s.array(s.string())),
    rejectionCodes: rejectionCodesSchema,
    customRejectionMessage: s.optional(s.string()),
  });
