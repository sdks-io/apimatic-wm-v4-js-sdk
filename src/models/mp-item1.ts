import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { price21Schema, type Price21 } from "./price21.js";

export type MpItem1 = {
  /**
   * Applicable for CA, MX, and CL markets. Price details for the item. <br><b
   * style='color:green;'>Market availability: CA | MX | CL</b>
   */
  price?: Price21;
};

export const mpItem1Schema: Schema<MpItem1> = s.object<MpItem1>({
  price: s.optional(s.lazy(() => price21Schema)),
  _keysMap: {
    price: "Price",
  },
});
