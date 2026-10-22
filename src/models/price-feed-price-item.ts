import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { price4Schema, type Price4 } from "./price4.js";

export type PriceFeedPriceItem = {
  /**
   * Applicable for CA, MX, and CL markets. Price details for the item.<br><b
   * style='color:green;'>Market availability: CA | MX | CL</b>
   */
  price: Price4;
};

export const priceFeedPriceItemSchema: Schema<PriceFeedPriceItem> = s.object<PriceFeedPriceItem>({
  price: price4Schema,
  _keysMap: {
    price: "Price",
  },
});
