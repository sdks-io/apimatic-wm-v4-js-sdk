import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The field ‘Promo&Discount’ is for the US market. <br><b style='color:green;'>Market availability:
 * US</b>
 */
export type PromoDiscount = {
  /**
   * The SKU of the item for which the price is being updated.<br><b style='color:green;'>Market
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
};

export const promoDiscountSchema: Schema<PromoDiscount> = s.object<PromoDiscount>({
  sku: s.string(),
  price: s.float64(),
  msrp: s.optional(s.float64()),
});
