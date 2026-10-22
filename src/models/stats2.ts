import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gmv4Schema, type Gmv4 } from "./gmv4.js";

/** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
export type Stats2 = {
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  gmv?: Gmv4;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  pageViews?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  orders?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  conversionRate?: string;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  totalUnits?: string;
};

export const stats2Schema: Schema<Stats2> = s.object<Stats2>({
  gmv: s.optional(s.lazy(() => gmv4Schema)),
  pageViews: s.optional(s.string()),
  orders: s.optional(s.string()),
  conversionRate: s.optional(s.string()),
  totalUnits: s.optional(s.string()),
});
