import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Price range of the items.<br><b style='color:green;'>Market availability: US only</b> */
export type Price22 = {
  /** Minimum price of the item.<br><b style='color:green;'>Market availability: US only</b> */
  minimum?: number;
  /** Maximum price of the item.<br><b style='color:green;'>Market availability: US only</b> */
  maximum?: number;
};

export const price22Schema: Schema<Price22> = s.object<Price22>({
  minimum: s.optional(s.float64()),
  maximum: s.optional(s.float64()),
});
