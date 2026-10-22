import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Controls where discounted price is revealed to customers.<br><b style='color:green;'>Market
 * availability: US
 */
export const PromotionPlacement = {
  MapCart: "MAP Cart",
} as const;
export type PromotionPlacement = (typeof PromotionPlacement)[keyof typeof PromotionPlacement] | (string & {});

export const promotionPlacementSchema: EnumSchema<PromotionPlacement> =
  s.enumOf<PromotionPlacement>(PromotionPlacement);
