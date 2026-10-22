import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemPrice11Schema, type ItemPrice11 } from "./item-price11.js";
import { shippingPrice10Schema, type ShippingPrice10 } from "./shipping-price10.js";

/** Competitor's item information. */
export type Competitor4 = {
  /**
   * Competitor item ID. <br><b style='color:green;'>Market availability: US | CA | MX</span></b>
   */
  itemId?: string;
  /**
   * Competitor item URL. <br><b style='color:green;'>Market availability: US | CA | MX</span></b>
   */
  url?: string;
  /**
   * Competitor's item shipping price details of the item recommendation. <br><b
   * style='color:green;'>Market availability: US | CA | MX</span></b>
   */
  itemPrice?: ItemPrice11;
  /**
   * Competitor's item shipping price details of the item recommendation. <br><b
   * style='color:green;'>Market availability: US | CA | MX</span></b>
   */
  shippingPrice?: ShippingPrice10;
};

export const competitor4Schema: Schema<Competitor4> = s.object<Competitor4>({
  itemId: s.optional(s.string()),
  url: s.optional(s.string()),
  itemPrice: s.optional(s.lazy(() => itemPrice11Schema)),
  shippingPrice: s.optional(s.lazy(() => shippingPrice10Schema)),
});
