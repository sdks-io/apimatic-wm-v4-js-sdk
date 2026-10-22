import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productType2Schema, type ProductType2 } from "./product-type2.js";

/** <br><b style='color:green;'>Market availability: US only</b> */
export type Payload16 = {
  /** <br><b style='color:green;'>Market availability: US only</b> */
  name?: string;
  /** <br><b style='color:green;'>Market availability: US only</b> */
  count?: number;
  /**
   * An array specifying different types of products. This field is only applicable for
   * categories.<br><b style='color:green;'>Market availability: US only</b>
   */
  productType?: ProductType2[];
};

export const payload16Schema: Schema<Payload16> = s.object<Payload16>({
  name: s.optional(s.string()),
  count: s.optional(s.int()),
  productType: s.optional(s.array(s.lazy(() => productType2Schema))),
});
