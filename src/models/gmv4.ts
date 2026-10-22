import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
export type Gmv4 = {
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  amount?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  currency?: string;
};

export const gmv4Schema: Schema<Gmv4> = s.object<Gmv4>({
  amount: s.optional(s.string()),
  currency: s.optional(s.string()),
});
