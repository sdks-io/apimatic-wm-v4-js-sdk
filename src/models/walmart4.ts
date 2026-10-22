import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemPrice10Schema, type ItemPrice10 } from "./item-price10.js";
import { shippingPrice10Schema, type ShippingPrice10 } from "./shipping-price10.js";

/**
 * Walmart's item information. <br><b style='color:green;'>Market availability: US | CA |
 * MX</span></b>
 */
export type Walmart4 = {
  /** Walmart item ID. <br><b style='color:green;'>Market availability: US | CA | MX</span></b> */
  itemId?: string;
  /** Walmart item URL. <br><b style='color:green;'>Market availability: US | CA | MX</span></b> */
  url?: string;
  /**
   * Walmart fulfilment service indicator. <br><b style='color:green;'>Market availability: US
   * only</span></b>
   */
  wfsIndicator?: boolean;
  /** Competitor's item shipping price details of the item recommendation. */
  itemPrice?: ItemPrice10;
  /**
   * Competitor's item shipping price details of the item recommendation. <br><b
   * style='color:green;'>Market availability: US | CA | MX</span></b>
   */
  shippingPrice?: ShippingPrice10;
};

export const walmart4Schema: Schema<Walmart4> = s.object<Walmart4>({
  itemId: s.optional(s.string()),
  url: s.optional(s.string()),
  wfsIndicator: s.optional(s.boolean()),
  itemPrice: s.optional(s.lazy(() => itemPrice10Schema)),
  shippingPrice: s.optional(s.lazy(() => shippingPrice10Schema)),
});
