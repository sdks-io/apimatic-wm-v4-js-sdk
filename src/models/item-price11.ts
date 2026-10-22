import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Competitor's item shipping price details of the item recommendation. <br><b
 * style='color:green;'>Market availability: US | CA | MX</span></b>
 */
export type ItemPrice11 = {
  /**
   * The numerical amount of the price. Example: 9.99 <br><b style='color:green;'>Market
   * availability: US | CA</span></b>
   */
  amount?: number;
  /**
   * Currency associated with the price of the item recommendation. <br><b
   * style='color:green;'>Market availability: US | CA | MX</span></b>
   */
  currency?: string;
};

export const itemPrice11Schema: Schema<ItemPrice11> = s.object<ItemPrice11>({
  amount: s.optional(s.float64()),
  currency: s.optional(s.string()),
});
