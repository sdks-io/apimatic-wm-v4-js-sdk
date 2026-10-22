import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The productType is only applicable for categories.<br><b style='color:green;'>Market
 * availability: US only</b>
 */
export type ProductType2 = {
  /** <br><b style='color:green;'>Market availability: US only</b> */
  name?: string;
  /** <br><b style='color:green;'>Market availability: US only</b> */
  count?: number;
};

export const productType2Schema: Schema<ProductType2> = s.object<ProductType2>({
  name: s.optional(s.string()),
  count: s.optional(s.int()),
});
