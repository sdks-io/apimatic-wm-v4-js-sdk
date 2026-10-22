import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { promotionInformation1Schema, type PromotionInformation1 } from "./promotion-information1.js";

/**
 * The field ‘Promo&Discount’ is for the US market. <br><b style='color:green;'>Market availability:
 * US</b>
 */
export type PromoDiscount1 = {
  /**
   * The SKU of the item for which the promotion is being updated.<br><b style='color:green;'>Market
   * availability: US</b>
   */
  sku: string;
  /**
   * The current selling price of the item on Walmart.com.<br><b style='color:green;'>Market
   * availability: US</b>
   */
  price: number;
  /**
   * The manufacturer's suggested retail price (MSRP) for the item.<br><b
   * style='color:green;'>Market availability: US</b>
   */
  msrp?: number;
  /**
   * Promotion ID is required to update the existing promotion information. <br><b
   * style='color:green;'>Market availability: US
   */
  promoid?: string;
  promotionInformation?: PromotionInformation1;
};

export const promoDiscount1Schema: Schema<PromoDiscount1> = s.object<PromoDiscount1>({
  sku: s.string(),
  price: s.float64(),
  msrp: s.optional(s.float64()),
  promoid: s.optional(s.string()),
  promotionInformation: s.optional(s.lazy(() => promotionInformation1Schema)),
});
