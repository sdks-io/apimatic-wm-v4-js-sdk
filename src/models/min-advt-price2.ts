import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: Global</b> */
export type MinAdvtPrice2 = {
  /** <br><b style='color:green;'>Market availability: Global</b> */
  value?: string;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  currency?: string;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  amount?: number;
};

export const minAdvtPrice2Schema: Schema<MinAdvtPrice2> = s.object<MinAdvtPrice2>({
  value: s.optional(s.string()),
  currency: s.optional(s.string()),
  amount: s.optional(s.float64()),
});
