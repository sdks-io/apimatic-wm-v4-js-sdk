import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PriceDisplayCodes = {
  isClearance?: boolean;
  hidePriceForSoi?: Record<string, unknown>;
  submapType?: Record<string, unknown>;
  isRollback?: boolean;
  isReducedPrice?: boolean;
  isEligibleForAssociateDiscount?: Record<string, unknown>;
  isStrikethrough?: boolean;
};

export const priceDisplayCodesSchema: Schema<PriceDisplayCodes> = s.object<PriceDisplayCodes>({
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
