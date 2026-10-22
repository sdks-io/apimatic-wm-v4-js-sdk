import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
export const RejectionCodes = {
  NotSellingTheseItems: "NOT_SELLING_THESE_ITEMS",
  NotSellingTheseBrands: "NOT_SELLING_THESE_BRANDS",
  NotSellingTheseCategories: "NOT_SELLING_THESE_CATEGORIES",
  LimitedToOtherMarketplace: "LIMITED_TO_OTHER_MARKETPLACE",
  AlreadySellingOnWalmart: "ALREADY_SELLING_ON_WALMART",
  OtherReason: "OTHER_REASON",
} as const;
export type RejectionCodes = (typeof RejectionCodes)[keyof typeof RejectionCodes] | (string & {});

export const rejectionCodesSchema: EnumSchema<RejectionCodes> = s.enumOf<RejectionCodes>(RejectionCodes);
