import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
export type Price8 = {
  /**
   * The numerical value of the price<br><b style='color:green;'>Market availability: US | CA |
   * MX</b>
   */
  amount?: string;
  /** The currency type<br><b style='color:green;'>Market availability: US | CA | MX</b> */
  currency?: string;
};

export const price8Schema: Schema<Price8> = s.object<Price8>({
  amount: s.optional(s.string()),
  currency: s.optional(s.string()),
});
