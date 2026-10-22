import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * | Market | Translation |
 * | --- | ----------- |
 * | US | ["Clearance", "Reduced"]|
 *
 * <br><b style='color:green;'>Market availability: US</b>
 */
export const PromotionType1 = {
  Clearance: "Clearance",
  Reduced: "Reduced",
} as const;
export type PromotionType1 = (typeof PromotionType1)[keyof typeof PromotionType1] | (string & {});

export const promotionType1Schema: EnumSchema<PromotionType1> = s.enumOf<PromotionType1>(PromotionType1);
