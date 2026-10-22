import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { price12Schema, type Price12 } from "./price12.js";

export type PromotionFeedPriceItem = {
  /**
   * Applicable for CA, MX, and CL markets. Price details for the item. <br><b
   * style='color:green;'>Market availability: CA | MX | CL</b>
   */
  price: Price12;
};

export const promotionFeedPriceItemSchema: Schema<PromotionFeedPriceItem> = s.object<PromotionFeedPriceItem>({
  price: price12Schema,
  _keysMap: {
    price: "Price",
  },
});
