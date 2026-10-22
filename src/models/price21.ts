import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { promotionInformation2Schema, type PromotionInformation2 } from "./promotion-information2.js";

/**
 * Applicable for CA, MX, and CL markets. Price details for the item. <br><b
 * style='color:green;'>Market availability: CA | MX | CL</b>
 */
export type Price21 = {
  /**
   * The SKU of the item for which the promotion is being updated.<br><b style='color:green;'>Market
   * availability: CA | MX | CL</b>
   */
  sku: string;
  /**
   * The current selling price of the item on Walmart.com.<br><b style='color:green;'>Market
   * availability: CA | MX | CL</b>
   */
  price: number;
  /**
   * The manufacturer's suggested retail price (MSRP) for the item.<br><b
   * style='color:green;'>Market availability: CA | MX | CL</b>
   */
  msrp?: number;
  promotionInformation: PromotionInformation2;
};

export const price21Schema: Schema<Price21> = s.object<Price21>({
  sku: s.string(),
  price: s.float64(),
  msrp: s.optional(s.float64()),
  promotionInformation: promotionInformation2Schema,
});
