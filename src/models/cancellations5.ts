import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
export type Cancellations5 = {
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  defectedOrder?: number;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  totalOrder?: number;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  rate?: number;
};

export const cancellations5Schema: Schema<Cancellations5> = s.object<Cancellations5>({
  defectedOrder: s.optional(s.int()),
  totalOrder: s.optional(s.int()),
  rate: s.optional(s.int()),
});
