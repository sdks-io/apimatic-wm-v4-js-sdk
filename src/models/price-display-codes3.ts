import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: Global</b> */
export type PriceDisplayCodes3 = {
  /** <br><b style='color:green;'>Market availability: Global</b> */
  isClearance?: boolean;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  hidePriceForSoi?: Record<string, unknown>;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  submapType?: Record<string, unknown>;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  isRollback?: boolean;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  isReducedPrice?: boolean;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  isEligibleForAssociateDiscount?: Record<string, unknown>;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  isStrikethrough?: boolean;
};

export const priceDisplayCodes3Schema: Schema<PriceDisplayCodes3> = s.object<PriceDisplayCodes3>({
  isClearance: s.optional(s.boolean()),
  hidePriceForSoi: s.optional(s.record(s.string(), s.unknown())),
  submapType: s.optional(s.record(s.string(), s.unknown())),
  isRollback: s.optional(s.boolean()),
  isReducedPrice: s.optional(s.boolean()),
  isEligibleForAssociateDiscount: s.optional(s.record(s.string(), s.unknown())),
  isStrikethrough: s.optional(s.boolean()),
  _keysMap: {
    hidePriceForSoi: "hidePriceForSOI",
  },
});
