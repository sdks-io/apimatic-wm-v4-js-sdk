import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * | Market | Translation |
 * | --- | ----------- |
 * | CA  | ["Clearance", "Reduced"]|
 * | MX | ["Rebaja", "Liquidación"]|
 *
 * <br><b style='color:green;'>Market availability: US | CA | MX </b>
 */
export const PromotionType = {
  Clearance: "Clearance",
  Reduced: "Reduced",
  Rebaja: "Rebaja",
  LiquidaciN: "Liquidación",
} as const;
export type PromotionType = (typeof PromotionType)[keyof typeof PromotionType] | (string & {});

export const promotionTypeSchema: EnumSchema<PromotionType> = s.enumOf<PromotionType>(PromotionType);
