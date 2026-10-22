import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { promotionInformationSchema, type PromotionInformation } from "./promotion-information.js";

/**
 * Applicable for CA, MX, and CL markets. Price details for the item. <br><b
 * style='color:green;'>Market availability: CA | MX | CL</b>
 */
export type Price12 = {
  /**
   * The SKU of the item for which the promotion is being updated.<br><b style='color:green;'>Market
   * availability: CA | MX | CL </b>
   */
  sku: string;
  /**
   * The current selling price of the item on Walmart.com.<br><b style='color:green;'>Market
   * availability: CA | MX | CL </b>
   */
  price: number;
  /**
   * The manufacturer's suggested retail price (MSRP) for the item.<br><b
   * style='color:green;'>Market availability: CA | MX | CL</b>
   */
  msrp?: number;
  promotionInformation?: PromotionInformation;
};

export const price12Schema: Schema<Price12> = s.object<Price12>({
  sku: s.string(),
  price: s.float64(),
  msrp: s.optional(s.float64()),
  promotionInformation: s.optional(s.lazy(() => promotionInformationSchema)),
});
