import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
export type MarketPrice2 = {
  /**
   * The numerical value of the price<br><b style='color:green;'>Market availability: US | CA |
   * MX</b>
   */
  amount?: string;
  /** The currency type<br><b style='color:green;'>Market availability: US | CA | MX</b> */
  currency?: string;
};

export const marketPrice2Schema: Schema<MarketPrice2> = s.object<MarketPrice2>({
  amount: s.optional(s.string()),
  currency: s.optional(s.string()),
});
