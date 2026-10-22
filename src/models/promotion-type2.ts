import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * | Market | Translation |
 * | --- | ----------- |
 * | CA  | ["Clearance", "Reduced"]|
 * | MX | ["Rebaja", "Liquidación"]|
 *
 * <br><b style='color:green;'>Market availability: CA | MX </b>
 */
export const PromotionType2 = {
  Clearance: "Clearance",
  Reduced: "Reduced",
  Rebaja: "Rebaja",
  LiquidaciN: "Liquidación",
} as const;
export type PromotionType2 = (typeof PromotionType2)[keyof typeof PromotionType2] | (string & {});

export const promotionType2Schema: EnumSchema<PromotionType2> = s.enumOf<PromotionType2>(PromotionType2);
