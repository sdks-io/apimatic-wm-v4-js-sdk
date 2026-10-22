import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Gross Merchandise Value of the total result set<br><b style='color:green;'>Market availability:
 * US | CA | MX</b>
 */
export type TotalGmvAmount1 = {
  /**
   * The numerical value of the price<br><b style='color:green;'>Market availability: US | CA |
   * MX</b>
   */
  amount?: string;
  /** The currency type<br><b style='color:green;'>Market availability: US | CA | MX</b> */
  currency?: string;
};

export const totalGmvAmount1Schema: Schema<TotalGmvAmount1> = s.object<TotalGmvAmount1>({
  amount: s.optional(s.string()),
  currency: s.optional(s.string()),
});
