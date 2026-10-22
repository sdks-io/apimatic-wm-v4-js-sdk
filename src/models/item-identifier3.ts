import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: Global</b> */
export type ItemIdentifier3 = {
  /** <br><b style='color:green;'>Market availability: Global</b> */
  sku?: string;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  offerId?: string;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  itemId?: string;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  wpid?: string;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  productType?: string;
};

export const itemIdentifier3Schema: Schema<ItemIdentifier3> = s.object<ItemIdentifier3>({
  sku: s.optional(s.string()),
  offerId: s.optional(s.string()),
  itemId: s.optional(s.string()),
  wpid: s.optional(s.string()),
  productType: s.optional(s.string()),
});
