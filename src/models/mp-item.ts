import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { price11Schema, type Price11 } from "./price11.js";

export type MpItem = {
  /**
   * Applicable for CA, MX, and CL markets. Price details for the item. <br><b
   * style='color:green;'>Market availability: CA | MX | CL</b>
   */
  price?: Price11;
};

export const mpItemSchema: Schema<MpItem> = s.object<MpItem>({
  price: s.optional(s.lazy(() => price11Schema)),
  _keysMap: {
    price: "Price",
  },
});
