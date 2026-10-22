import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GmvAmount2 = {
  /**
   * The numerical value of the price<br><b style='color:green;'>Market availability: US | CA |
   * MX</b>
   */
  amount?: number;
  /** The currency type<br><b style='color:green;'>Market availability: US | CA | MX</b> */
  currency?: string;
};

export const gmvAmount2Schema: Schema<GmvAmount2> = s.object<GmvAmount2>({
  amount: s.optional(s.int()),
  currency: s.optional(s.string()),
});
